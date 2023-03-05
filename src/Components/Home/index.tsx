import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { WithModal } from "../../HOC/Modal";
import { monthLabels } from "../../Utils";
import { AddExpense } from "./Components/AddExpense";
import { HomeContainer } from "./styles";
const formatter = new Intl.NumberFormat("id");

const AddExpenseModal = WithModal(AddExpense);

export interface ExpenseValues {
  toGo: string;
  toBack: string;
}
interface ExpenseInterface {
  month: number;
  monthExpenses: [
    {
      day: number;
    } & ExpenseValues
  ];
}
const initialValues = { toGo: "0", toBack: "0" };

const Home: React.FC = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [values, setValues] = useState<ExpenseValues>(initialValues);
  const [atualMonthExpense, setAtualMonthExpense] = useState("0");
  const month = new Date().getUTCMonth() + 1;
  const currentMonth = get(monthLabels, month - 1);
  const { toBack, toGo } = values;

  const deleteExpenseFromCurrentMonth = () => {
    const expenses = JSON.parse(localStorage.getItem("allExpenses")!);
    const newExpenses = expenses.filter(
      (expense: ExpenseInterface) => expense.month !== month
    );

    localStorage.setItem("allExpenses", JSON.stringify(newExpenses));
    setAtualMonthExpense("0");
  };

  const createExpenseCallback = () => {
    if ((toBack === "" && toGo === "") || (toBack === "0" && toGo === "0")) {
      setValues(initialValues);
      return toast.error("Digite algum valor!");
    }

    const expenses: ExpenseInterface[] = JSON.parse(
      localStorage.getItem("allExpenses")!
    );

    const findCurrentMonth = expenses.find(
      (expense) => expense.month === month
    );
    if (!findCurrentMonth) {
      expenses.push({
        month: month,
        monthExpenses: [
          {
            day: new Date().getUTCDate(),
            ...values,
          },
        ],
      });
    } else if (
      findCurrentMonth.monthExpenses.find(
        (expense) => expense.day === new Date().getUTCDate()
      )
    ) {
      setValues(initialValues);
      return toast.error("Já existe uma despesa no dia atual!");
    }

    if (findCurrentMonth)
      findCurrentMonth.monthExpenses.push({
        ...values,
        day: new Date().getUTCDate(),
      });

    localStorage.setItem(
      "allExpenses",
      JSON.stringify(
        !findCurrentMonth
          ? expenses
          : expenses.map((expense) => {
              if (expense.month === findCurrentMonth.month) {
                return {
                  findCurrentMonth,
                };
              }
              return expense;
            })
      )
    );
    toast.success("Despesa adicionada com sucesso!");
    allExpensesFromCurrentMonth();
    setValues(initialValues);
  };

  const allExpensesFromCurrentMonth = () => {
    const expenses: ExpenseInterface[] = JSON.parse(
      localStorage.getItem("allExpenses")!
    );
    const currentExpensesMonth = expenses.find(
      (expense) => expense.month === month
    );

    if (currentExpensesMonth) {
      setAtualMonthExpense(
        formatter.format(
          currentExpensesMonth.monthExpenses.reduce((acc, expense) => {
            return Number(acc) + Number(expense.toGo) + Number(expense.toBack);
          }, 0)
        )
      );
      return;
    }
    setAtualMonthExpense(formatter.format(0));
  };

  useEffect(() => {
    allExpensesFromCurrentMonth();
  }, []);

  return (
    <HomeContainer>
      <header>
        <h1>CaronasMoney</h1>
      </header>

      <main>
        <div className="cards">
          <div className="card error">
            <FaMoneyBillWave size={35} />
            Despesa Atual de {currentMonth}: R$ {atualMonthExpense}
          </div>
          <div className="card " onClick={() => setShowAddExpense(true)}>
            <AiOutlinePlus size={35} />
            Adicionar Despesa de {currentMonth}
          </div>
          <div className="card success">
            <AiFillEye size={35} />
            Visualizar Despesas Totais
          </div>
          <div
            className="card error-bg"
            onClick={deleteExpenseFromCurrentMonth}
          >
            <BiTrash size={35} />
            Deletar Despesas do Mês
          </div>
        </div>
      </main>
      <AddExpenseModal
        setValues={setValues}
        values={values}
        isOpen={showAddExpense}
        onHide={() => setValues(initialValues)}
        setIsOpen={setShowAddExpense}
        label="Adicionar Despesa"
        callback={createExpenseCallback}
      />
    </HomeContainer>
  );
};

export default Home;

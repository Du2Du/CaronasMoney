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
import { useExpense } from "./Hooks/Expense";
import { useNavigate } from "react-router";

const AddExpenseModal = WithModal(AddExpense);

export interface ExpenseValues {
  toGo: string;
  toBack: string;
}

export interface ExpenseInterface {
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
  const navigator = useNavigate();
  const month = new Date().getUTCMonth() + 1;
  const currentMonth = get(monthLabels, month - 1);
  const {
    allExpensesFromCurrentMonth,
    createExpenseCallback,
    deleteExpenseFromCurrentMonth,
  } = useExpense(setAtualMonthExpense, setValues, values);

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
          <div
            className="card success"
            onClick={() => {
              navigator("/despesas");
            }}
          >
            <AiFillEye size={35} />
            Visualizar Despesas Totais
          </div>
          <button
            disabled
            className="card error-bg"
            onClick={deleteExpenseFromCurrentMonth}
          >
            <BiTrash size={35} />
            Deletar Despesas do Mês
          </button>
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

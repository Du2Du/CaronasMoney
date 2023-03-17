import { toast } from "react-hot-toast";
import { ExpenseInterface } from "../..";

const formatter = new Intl.NumberFormat("id");
const initialValues = { toGo: "0", toBack: "0", day: new Date().getDate() };

export const useExpense = (
  setAtualMonthExpense: (value: string) => void,
  setValues: (value: any) => void,
  values: any
) => {
  const month = new Date().getMonth() + 1;
  const { toBack, toGo, day } = values;

  const deleteExpenseFromCurrentMonth = () => {
    const expenses = JSON.parse(localStorage.getItem("allExpenses")!);
    const newExpenses = expenses.filter(
      (expense: ExpenseInterface) => expense.month !== month
    );

    localStorage.setItem("allExpenses", JSON.stringify(newExpenses));
    setAtualMonthExpense("0");
  };

  const createExpenseCallback = () => {
    if (
      (toBack === "" && toGo === "") ||
      (toBack === "0" && toGo === "0") ||
      day === "" ||
      day === "0"
    ) {
      setValues(initialValues);
      return toast.error("Digite algum valor!");
    }

    if (day > new Date().getDate()) {
      setValues(initialValues);
      return toast.error("Digite um dia válido!");
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
        monthExpenses: [values],
      });
    } else if (
      findCurrentMonth.monthExpenses.find((expense) => expense.day === day)
    ) {
      setValues(initialValues);
      return toast.error("Já existe uma despesa no dia selecionado!");
    }

    if (findCurrentMonth) findCurrentMonth.monthExpenses.push(values);

    localStorage.setItem(
      "allExpenses",
      JSON.stringify(
        !findCurrentMonth
          ? expenses
          : expenses.map((expense) => {
              if (expense.month === findCurrentMonth.month) {
                return findCurrentMonth;
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

  return {
    allExpensesFromCurrentMonth,
    createExpenseCallback,
    deleteExpenseFromCurrentMonth,
  };
};

import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ExpenseValues } from "../..";
import { WithModal } from "../../../../HOC/Modal";
import { monthLabels } from "../../../../Utils/Months";
import { useExpense } from "../../Hooks/Expense";
import { AddExpense } from "../AddExpense";
const AddExpenseModal = WithModal(AddExpense);
const initialValues = { toGo: "0", toBack: "0" };

export const Section: React.FC = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const navigator = useNavigate();
  const [values, setValues] = useState<ExpenseValues>(initialValues);
  const [atualMonthExpense, setAtualMonthExpense] = useState("0");
  const {
    allExpensesFromCurrentMonth,
    createExpenseCallback,
    deleteExpenseFromCurrentMonth,
  } = useExpense(setAtualMonthExpense, setValues, values);
  const month = new Date().getMonth() + 1;
  const currentMonth = get(monthLabels, month - 1);
  const hours = new Date().getHours();
  const saudation =
    hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Night";

  useEffect(() => {
    allExpensesFromCurrentMonth();
  }, []);
  return (
    <div>
      <header>
        <h2>{saudation}, User</h2>
        <p>See now, your Car Ride expenses!</p>
      </header>
      <section>
        <div>
          <span>Expenses from {currentMonth}</span>
          <b>{}</b>
        </div>
      </section>{" "}
      <AddExpenseModal
        setValues={setValues}
        values={values}
        isOpen={showAddExpense}
        onHide={() => setValues(initialValues)}
        setIsOpen={setShowAddExpense}
        label="Adicionar Despesa"
        callback={createExpenseCallback}
      />
    </div>
  );
};

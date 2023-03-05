import React, { useState } from "react";
import { get } from "lodash";
import { monthLabels } from "../../../../Utils";
import { AddExpenseContainer } from "./styles";
import { ExpenseValues } from "../..";

export const AddExpense: React.FC<{
  values: ExpenseValues;
  setValues: React.Dispatch<React.SetStateAction<ExpenseValues>>;
}> = ({ values: { toBack, toGo }, setValues }) => {
  const month = get(monthLabels, new Date().getMonth());

  const changeValue =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((pastValue) => ({
        ...pastValue,
        [field]: Number(e.target.value),
      }));
    };

  return (
    <AddExpenseContainer>
      <h2>Adicionar Despesa ao mês de {month}:</h2>
      <div className="fields">
        <div className="field">
          <label htmlFor="toGo">Ida</label>
          <input
            onChange={changeValue("toGo")}
            type="number"
            value={toGo}
            id="toGo"
          />
        </div>
        <div className="field">
          <label htmlFor="toBack">Volta</label>
          <input
            onChange={changeValue("toBack")}
            type="number"
            id="toBack"
            value={toBack}
          />
        </div>
      </div>
    </AddExpenseContainer>
  );
};

import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { WithModal } from "../../HOC/Modal";
import { monthLabels } from "../../Utils/Months";
import { AddExpense } from "./Components/AddExpense";
import { Section } from "./Components/Section";
import { SideBar } from "./Components/SideBar";
import { useExpense } from "./Hooks/Expense";
import { HomeContainer } from "./styles";

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

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SideBar />
      <Section />
    </HomeContainer>
  );
};

export default Home;

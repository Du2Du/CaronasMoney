import React, { useState } from "react";
import { HomeContainer } from "./styles";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { format } from "date-fns";
import { monthLabels } from "../../Utils";
import { get } from "lodash";
import { WithModal } from "../../HOC/Modal";
import { AddExpense } from "./Components/AddExpense";

const AddExpenseModal = WithModal(AddExpense);

const Home: React.FC = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const currentMonth = get(monthLabels, new Date().getUTCMonth());

  return (
    <HomeContainer>
      <header>
        <h1>CaronasMoney</h1>
      </header>

      <main>
        <div className="cards">
          <div className="card error">
            <FaMoneyBillWave size={35} />
            Despesa Atual de {currentMonth}: R$ {"00,00"}
          </div>
          <div className="card ">
            <AiOutlinePlus size={35} />
            Adicionar Despesa de {currentMonth}
          </div>
          <div className="card success" onClick={() => console.log("ola")}>
            <AiFillEye size={35} />
            Visualizar Despesas Totais
          </div>
        </div>
      </main>
      <AddExpenseModal
        isOpen={showAddExpense}
        setIsOpen={setShowAddExpense}
        label="Adicionar Despesa"
      />
    </HomeContainer>
  );
};

export default Home;

import { get } from "lodash";
import React from "react";
import { AiOutlineCar, AiTwotoneCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarContainer } from "./styles";
import { IoAdd } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <h3>
        <b>Caronas</b>
        <b style={{ color: "#1F3BB3" }}>Money</b>
      </h3>
      <Link to="/home">
        <RxDashboard size={20} />
        <label>Home</label>
      </Link>
      <div>
        <AiOutlineCar />
        <label>Car Ride</label>
        <Link to="/add-expense">
          <IoAdd size={20} />
          <label>Add Day</label>
        </Link>
        <Link to="/my-expenses">
          <AiTwotoneCalendar size={20} />
          <label>My Expenses</label>
        </Link>
      </div>
    </SideBarContainer>
  );
};

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import MonthExpenses from "./Pages/MonthExpenses";
import { Toaster } from "react-hot-toast";

function App() {
  if (!localStorage.hasOwnProperty("allExpenses"))
    localStorage.setItem("allExpenses", JSON.stringify([]));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carona" element={<Home />} />
          <Route path="/despesas" element={<MonthExpenses />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
}

export default App;

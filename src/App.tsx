import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
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
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
}

export default App;

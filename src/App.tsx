import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carona" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

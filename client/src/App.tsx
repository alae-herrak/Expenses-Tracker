import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;

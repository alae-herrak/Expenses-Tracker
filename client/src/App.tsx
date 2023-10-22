import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Dashboard, Login, Navbar, Register } from "./components";
import { RootState } from "./store";

const App = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {user?._id && <Navbar user={user} />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard user={user} />} />
      </Routes>
    </>
  );
};

export default App;

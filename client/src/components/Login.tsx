import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";
import Input from "./auth-input";
import { loginUser } from "../api/user";
import { login } from "../redux/userSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    loginUser(username, password)
      .then((res) => {
        setLoading(false);
        if (!res.data) setError("Incorrect username or password");
        else {
          const { user, token } = res.data;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
          dispatch(login());
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err), setLoading(false);
      });
  };

  return (
    <div className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold">ExpenseEase</h1>
      </div>
      <div className="mt-10 flex h-full w-full max-w-screen-sm flex-col items-center justify-center gap-5 rounded-md border-2 border-neutral-500 bg-slate-200 text-gray-800">
        <p className="text-xl font-light">Welcome back, login to continue</p>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={handleLogin}
        >
          <Input
            type="text"
            placeholder="Username"
            inputValue={username}
            setInputValue={setUsername}
            error={error}
          />
          <Input
            type="password"
            placeholder="Password"
            inputValue={password}
            setInputValue={setPassword}
            error={""}
          />
          <button
            disabled={loading}
            className={`w-[250px] rounded-md ${
              loading ? "cursor-not-allowed bg-gray-400" : "bg-slate-600"
            } p-3 text-slate-50 hover:bg-slate-500`}
          >
            Login
          </button>
          <p>
            Don't have an account yet?{" "}
            <a href="/register" className="text-cyan-600 underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import Logo from "../assets/logo.png";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold">ExpenseEase</h1>
      </div>
      <div className="mt-10 flex h-full w-full max-w-screen-sm flex-col items-center justify-center gap-5 rounded-md border-2 border-neutral-500 bg-slate-200 text-gray-800">
        <p className="text-xl font-light">Welcome back, login to continue</p>
        <form className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Username"
            className="w-[250px] rounded-md p-3 outline-slate-600 ring-slate-50 drop-shadow-md hover:ring-1"
          />
          {/* border-[1px] border-red-400 */}
          {/* <span className="w-[250px] text-left text-sm text-red-400">
            Username error
          </span> */}
          <input
            type="password"
            placeholder="Password"
            className="w-[250px] rounded-md p-3 outline-slate-600 ring-slate-50 drop-shadow-md hover:ring-1"
          />
          {/* <span className="w-[250px] text-left text-sm text-red-400">
            Password error
          </span> */}
          <button className="w-[250px] rounded-md bg-slate-600 p-3 text-slate-50 hover:bg-slate-500">
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

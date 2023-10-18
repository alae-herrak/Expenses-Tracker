import Logo from "../assets/logo.png";

const Register: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold">ExpenseEase</h1>
      </div>
      <div className="mt-10 flex h-full w-full max-w-screen-md flex-col items-center justify-center gap-5 rounded-md border-2 border-neutral-500 bg-slate-200 text-gray-800">
        <p className="text-xl font-light">Welcome, register to continue</p>
        <form className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Username"
            className="w-[250px] rounded-md p-3 ring-slate-50 drop-shadow-md hover:ring-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[250px] rounded-md p-3 ring-slate-50 drop-shadow-md hover:ring-1"
          />
          <input
            type="password"
            placeholder="Password confirmation"
            className="w-[250px] rounded-md p-3 ring-slate-50 drop-shadow-md hover:ring-1"
          />
          <label
            htmlFor="profilePicture"
            className="w-[250px] rounded-md bg-white p-3 drop-shadow-md hover:cursor-pointer hover:bg-slate-50"
          >
            Upload profile picture
            <input type="file" id="profilePicture" className="hidden" />
          </label>
          <button className="w-[250px] rounded-md bg-slate-600 p-3 text-slate-50 hover:bg-slate-500">
            Register
          </button>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-cyan-600 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

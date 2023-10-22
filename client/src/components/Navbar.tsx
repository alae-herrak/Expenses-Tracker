import { User } from "../redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Link from "./navbar-link";
import MenuOpen from "../assets/menu-open.png";
import MenuCLose from "../assets/menu-close.png";
import { logout } from "../redux/userSlice";

interface props {
  user: User;
}

const Navbar: React.FC<props> = ({ user }) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 w-full bg-slate-950 py-3">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between px-2 lg:px-0">
        <div className="flex items-center gap-2 text-xl">
          <img
            src={user.profilePicture}
            alt="logo"
            className="w-10 rounded-full border"
          />
          {user.username.toUpperCase()}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? MenuCLose : MenuOpen}
            alt="menu toggle"
            className="w-8"
          />
        </button>
        <div
          className={`w-full pt-3 lg:block lg:w-auto lg:pt-0 ${
            !isMenuOpen && "hidden"
          }`}
        >
          <nav className="flex flex-col items-center gap-1 text-lg lg:flex-row">
            <Link href="/" textContent="📊Dashboard" />
            <Link href="/income" textContent="📈Income" />
            <Link href="/expenses" textContent="📉Expenses" />
            <Link href="/settings" textContent="⚙️Settings" />
            <a
              className="rounded-md p-1 hover:bg-slate-200 hover:text-slate-900"
              href=""
              onClick={() => dispatch(logout())}
            >
              ➡️Logout
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

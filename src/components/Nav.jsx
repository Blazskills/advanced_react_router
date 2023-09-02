import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="w-full bg-red-200 sticky top-0 left-0 right-0">
      <nav className="max-container flex justify-between  ">
        <p className="text-[20px] font-montserrat font-bold">
          <NavLink to="/">AYATEE EVENT</NavLink>
        </p>
        <ul className="flex gap-6 text-[20px]">
          <li className="hover:text-red-500 hover:underline">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline ` : null)}
              to="."
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline` : null)}
              to="about"
            >
              About us
            </NavLink>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline` : null)}
              to="contact"
            >
              Contact us
            </NavLink>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline` : null)}
              to="dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-6 text-[20px]">
          <li className="hover:text-red-500 hover:underline">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline` : null)}
              to="auth/login"
            >
              Login
            </NavLink>
          </li>
          <li className="hover:text-red-500 hover:underline-offset-8">
            <NavLink
              className={({ isActive }) => (isActive ? `text-red-700 underline` : null) }
              to="auth/register"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

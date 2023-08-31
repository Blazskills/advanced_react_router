import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="w-full bg-red-200">
      <nav className="max-container flex justify-between  ">
        <p className="text-[20px] font-montserrat font-bold">
          <Link to="/">AYATEE EVENT</Link>
        </p>
        <ul className="flex gap-6 text-[20px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <ul className="flex gap-6 text-[20px]">
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

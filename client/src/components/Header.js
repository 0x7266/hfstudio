import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.js";
import Login from "../pages/Login.js";
import SignUp from "../pages/SignUp.js";
import curl from "../assets/curl.png";

export default function Header() {
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <header className="bg-custom4 flex justify-center p-2 w-full">
      <section className="flex justify-between w-full sm:w-2/3 items-center">
        <div className="logo flex gap-1 items-center">
          <img src={curl} alt="logo" className="w-12 sm:w-16" />
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl text-custom2 font-bold">
              BLABLABLA
            </h1>
          </Link>
        </div>
        <nav className="flex gap-3 text-custom1">
          <div className="logout">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div>
            <Link to="/login" element={<Login />}>
              Login
            </Link>
            <Link to="/signup" element={<SignUp />}>
              Sign up
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
}

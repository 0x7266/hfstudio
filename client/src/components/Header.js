import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import Login from "../pages/Login.js";
import SignUp from "../pages/SignUp.js";
import curl from "../assets/curl.png";
import curl2 from "../assets/curl2.png";

export default function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  function handleLogout() {
    logout();
  }

  return (
    <header className="bg-custom4 flex justify-center p-2 w-full">
      <section className="flex justify-between w-full sm:w-2/3 items-center">
        <div className="logo flex gap-1 items-center">
          <img src={curl} alt="logo" className="w-12 sm:w-16" />
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl text-custom2 font-bold">HF</h1>
          </Link>
          <img src={curl2} alt="logo" className="w-12 sm:w-16" />
        </div>
        <nav className="flex gap-3 text-custom1">
          {user ? (
            <div className="logout flex gap-3">
              <span>{user.email}</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 text-custom1">
              <Link to="/login" element={<Login />}>
                Login
              </Link>
              <Link to="/signup" element={<SignUp />}>
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </section>
    </header>
  );
}

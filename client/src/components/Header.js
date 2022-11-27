import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import Login from "../pages/Login.js";
import SignUp from "../pages/SignUp.js";
import curl from "../assets/curl.png";
import curl2 from "../assets/curl2.png";
import HFREDONDO from "../assets/HFREDONDO.jsx";

export default function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  function handleLogout() {
    logout();
  }

  return (
    <header className="bg-custom4 flex justify-center p-2 w-full">
      <section className="flex justify-between w-full px-3 sm:p-0 sm:w-4/5 items-center">
        <div className="logo flex gap-1 sm:gap-2 items-center text-custom2 w-16">
          <Link to="/">
            <HFREDONDO />
          </Link>
        </div>
        <nav className="flex flex-1 justify-end gap-3 text-custom1">
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

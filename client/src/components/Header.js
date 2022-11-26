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
      <section className="flex justify-between w-full sm:w-4/5 items-center">
        <div className="logo flex gap-1 sm:gap-2 items-center text-custom2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="w-12 sm:w-14"
            enableBackground="new 0 0 492.308 492.308"
            version="1.1"
            viewBox="0 0 492.308 492.308"
            xmlSpace="preserve"
          >
            <path
              fill="#ccc5b9"
              d="M464 207.697h-10.913v-55.644H395.77v-50.212h-77v105.856H173.503l.035-105.856h-77.01v50.212H39.221v55.644H28.298C12.692 207.697 0 220.399 0 236.005v20.298c0 15.606 12.692 28.308 28.298 28.308h10.923v55.538l57.308.101v50.216h76.913l.035-105.856h145.292v105.856h77v-50.202h57.317V284.61H464c15.606 0 28.308-12.702 28.308-28.308v-20.298c0-15.605-12.702-28.307-28.308-28.307zM39.221 264.918H28.298c-4.75 0-8.606-3.865-8.606-8.615v-20.298c0-4.75 3.856-8.615 8.606-8.615h10.923v37.528zm57.308 55.635l-37.615-.058v-148.75h37.615v148.808zm57.269-74.399l-.067 38.457h.052l-.033 86.163h-37.529v-249.24h37.625l-.048 124.62zm164.971 18.764H173.484l.006-18.764.029-18.764h145.25v37.528zm57.308-112.865V370.775h-37.615V121.536h37.615v30.517zm57.317 55.644v112.875h-37.625V171.745h37.625v35.952zm39.221 48.606c0 4.75-3.865 8.615-8.615 8.615h-10.913v-37.529H464c4.75 0 8.615 3.865 8.615 8.615v20.299z"
            ></path>
          </svg>
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl text-custom2 font-bold">HF</h1>
          </Link>
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

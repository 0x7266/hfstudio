import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App bg-custom3 min-h-screen flex flex-col items-center gap-10">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

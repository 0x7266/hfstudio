import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App bg-zinc-900 min-h-screen flex flex-col items-center gap-5 sm:gap-10 justify-center">
      <BrowserRouter>
        <div className="routes w-full h-screen">
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Navigate to="/dashboard" /> : <Home />}
            />
            <Route element={<Layout />}>
              <Route
                exact
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/login"
                element={!user ? <Login /> : <Navigate to="/dashboard" />}
              />
              <Route
                exact
                path="/signup"
                element={!user ? <SignUp /> : <Navigate to="/dashboard" />}
              />
            </Route>
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

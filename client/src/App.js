import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

function App() {
  return (
    <div className="App bg-custom3 min-h-screen flex flex-col items-center gap-10">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

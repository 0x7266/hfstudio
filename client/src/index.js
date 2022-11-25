import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { WorkoutsContextProvider } from "./context/WorkoutsContext.js";
import { AuthContextProvider } from "./context/AuthContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

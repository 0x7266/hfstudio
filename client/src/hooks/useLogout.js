import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";

export function useLogout() {
  const { dispatch } = useAuthContext();

  async function logout() {
    //this function does not need to send a request to the backend
    try {
      //remove user from local storage
      localStorage.removeItem("user");
      //remove the user from global state
      dispatch({ type: "LOGOUT" }); // does not need a payload
    } catch (error) {}
  }

  return { logout };
}

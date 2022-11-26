import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";
import { useWorkoutsContext } from "./useWorkoutsContext.js";

export function useLogout() {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  async function logout() {
    //this function does not need to send a request to the backend
    try {
      //remove user from local storage
      localStorage.removeItem("user");
      //remove the user from global state
      authDispatch({ type: "LOGOUT" }); // does not need a payload
      workoutsDispatch({ type: "GET_WORKOUTS", payload: null });
    } catch (error) {}
  }

  return { logout };
}

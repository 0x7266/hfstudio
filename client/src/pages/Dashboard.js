import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import NewWorkoutForm from "../components/NewWorkoutForm.js";
import Workouts from "../components/Workouts.js";

export default function Dashboard() {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      (async function getWorkouts() {
        const response = await fetch("/api/workouts", {
          headers: {
            "Authorization": `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: "GET_WORKOUTS", payload: data });
        }
      })();
    }
  }, [dispatch, user]);

  return (
    <main className="flex flex-col-reverse md:grid md:grid-cols-3 gap-5 sm:gap-3 items-start scroll-smooth">
      {workouts ? <Workouts workouts={workouts} /> : null}
      <NewWorkoutForm />
    </main>
  );
}

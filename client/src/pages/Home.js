import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import NewWorkoutForm from "../components/NewWorkoutForm.js";
import Workouts from "../components/Workouts.js";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    (async function getWorkouts() {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "GET_WORKOUTS", payload: data });
      }
    })();
  }, [dispatch]);

  return (
    <main className="flex flex-col md:grid md:grid-cols-3 px-10 gap-3 w-full items-center scroll-smooth">
      <NewWorkoutForm />
      {workouts ? <Workouts workouts={workouts} /> : null}
    </main>
  );
}

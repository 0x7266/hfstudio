import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import NewWorkoutForm from "../components/NewWorkoutForm.js";
import Workouts from "../components/Workouts.js";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  async function getWorkouts() {
    const response = await fetch("/api/workouts");
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "GET_WORKOUTS", payload: data });
    }
  }

  useEffect(() => {
    getWorkouts();
  }, [dispatch]);

  return (
    <main className="flex flex-col md:grid md:grid-cols-3 py-12 px-10 gap-3 md:justify-between place-content-between w-full items-center">
      <NewWorkoutForm />
      {workouts ? <Workouts workouts={workouts} /> : null}
    </main>
  );
}

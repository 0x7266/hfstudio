import { useState } from "react";
import { toast } from "react-toastify";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import { useAuthContext } from "../hooks/useAuthContext.js";

export default function NewWorkoutForm({ notify }) {
  const { dispatch, action } = useWorkoutsContext();
  const [exercise, setExercise] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  function notify() {
    toast.success("New workout added", {
      autoClose: 2000,
      theme: "dark",
    });
  }

  async function createWorkout(e) {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
    }
    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`,
      },
      body: JSON.stringify({ exercise, load, reps }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setExercise("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: data });
      notify();
    }
  }

  return (
    <div className="w-full flex sm:justify-end">
      <form
        className="flex flex-col mx-auto gap-y-6 w-[250px] sm:sticky sm:top-5"
        onSubmit={createWorkout}
      >
        <div className="inputs flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="exercise" className="text-custom1 text-xl">
              Exercise
            </label>
            <input
              id="exercise"
              type="text"
              className="py-2 px-3 text-xl rounded "
              onChange={(e) => setExercise(e.target.value)}
              value={exercise}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="load" className="text-custom1 text-xl">
              Load
            </label>
            <input
              id="load"
              type="number"
              className="py-2 px-3 text-xl rounded"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reps" className="text-custom1 text-xl">
              Reps
            </label>
            <input
              id="reps"
              type="number"
              className="py-2 px-3 text-xl rounded"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />
          </div>
        </div>
        <button className="bg-custom5 py-2 px-6 text-xl text-custom1 font-semibold rounded">
          Add workout
        </button>
        <div className="error inline">
          {error ? (
            <div className="self-start bg-red-200 bg-opacity-80 text-rose-600 text-opacity-70 font-semibold border-4 border-rose-600 border-opacity-40 rounded p-2">
              {error}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

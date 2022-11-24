import { useState } from "react";
import { toast } from "react-toastify";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function NewWorkoutForm({ notify }) {
  const { dispatch, action } = useWorkoutsContext();
  const [exercise, setExercise] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  function notify() {
    toast.success("New workout added", {
      autoClose: 2000,
      theme: "dark",
    });
  }

  async function createWorkout(e) {
    e.preventDefault();
    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    <form
      className="col flex flex-col gap-y-3 items-start self-start sm:sticky sm:top-5"
      onSubmit={createWorkout}
    >
      <input
        type="text"
        className="py-2 px-3 text-xl rounded"
        onChange={(e) => setExercise(e.target.value)}
        value={exercise}
      />
      <input
        type="number"
        className="py-2 px-3 text-xl rounded"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <input
        type="number"
        className="py-2 px-3 text-xl rounded"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button className="bg-slate-800 py-2 px-6 text-xl text-neutral-300 rounded">
        Add
      </button>
      <div className="error inline">
        {error ? (
          <div className="self-start bg-red-200 bg-opacity-80 text-rose-600 text-opacity-70 font-semibold border-4 border-rose-600 border-opacity-40 rounded p-2">
            {error}
          </div>
        ) : null}
      </div>
    </form>
  );
}

import { toast } from "react-toastify";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function Workouts({ workouts }) {
  const { dispatch, action } = useWorkoutsContext();

  async function deleteWorkout(workout) {
    const response = await fetch(`api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
      toast.error("Workout removed", {
        autoClose: 2000,
        theme: "dark",
      });
    }
  }

  return (
    <main className="flex flex-col gap-3 sm:grid sm:col-span-2 sm:grid-cols-2 auto-rows-fr w-fit">
      {workouts.map((w) => (
        <div
          key={w._id}
          className="rounded bg-custom4 text-custom2 shadow-md flex flex-col justify-between p-3 w-[250px]"
        >
          <div className="flex flex-col gap-1 ">
            <h2 className="text-3xl font-semibold uppercase text-custom5">
              {w.exercise}
            </h2>
            <div className="flex flex-col">
              {w.load ? <h2 className="text-xl">Load: {w.load}</h2> : null}
              <h2 className="text-xl">Reps: {w.reps}</h2>
            </div>
          </div>
          <button
            className="self-end w-8 text-red-500"
            onClick={() => deleteWorkout(w)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              ></path>
            </svg>
          </button>
        </div>
      ))}
    </main>
  );
}

import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp.js";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, isLoading } = useSignUp();

  async function handleSubmit(e) {
    e.preventDefault();
    await signUp(name, email, password);
  }

  return (
    <form
      className="col flex flex-col gap-y-6 sm:w-1/4 mx-auto self-start"
      onSubmit={handleSubmit}
    >
      <div className="inputs flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-custom1 text-xl">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="py-2 px-3 text-xl rounded "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-custom1 text-xl">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="py-2 px-3 text-xl rounded"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-custom1 text-xl">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="py-2 px-3 text-xl rounded"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <button
        disabled={isLoading}
        className="bg-custom5 py-2 px-6 text-xl text-custom1 font-semibold rounded"
      >
        Sign up
      </button>
      {error ? (
        <div className="w-full self-start bg-red-200 bg-opacity-80 text-rose-600 text-opacity-70 font-semibold border-4 border-rose-600 border-opacity-40 rounded p-2">
          {error}
        </div>
      ) : null}
    </form>
  );
}

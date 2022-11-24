import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 flex justify-center p-2 w-full">
      <section className="">
        <Link to="/">
          <h1 className="text-5xl text-neutral-300 font-bold">HF STUDIO</h1>
        </Link>
      </section>
    </header>
  );
}

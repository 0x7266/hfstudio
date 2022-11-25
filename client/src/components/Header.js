import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-custom4 flex justify-center p-2 w-full">
      <section className="">
        <Link to="/">
          <h1 className="text-5xl text-custom2 font-bold">HF STUDIO</h1>
        </Link>
      </section>
    </header>
  );
}

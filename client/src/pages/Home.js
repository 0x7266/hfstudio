import { Link } from "react-router-dom";
import { HFSTUDIO } from "../assets/HFSTUDIO.jsx";

export default function Inicio() {
  return (
    <main className="main w-full h-full">
      <div className=" backdrop flex flex-1 flex-col items-center gap-3 justify-center h-full">
        <HFSTUDIO />
        <Link
          to="/dashboard"
          className="hover:scale-125 animate-wiggle text-custom1"
        >
          ENTRAR
        </Link>
      </div>
    </main>
  );
}

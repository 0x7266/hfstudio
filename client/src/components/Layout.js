import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Laytout({ children }) {
  return (
    <div className="flex flex-col items-center gap-10 h-full ">
      <Header />
      <div className="w-full flex flex-col px-5">
        <Outlet />
      </div>
    </div>
  );
}

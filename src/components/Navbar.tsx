import { navlist } from "@/constants/data";
import { Button } from "./ui/Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-6 items-center sticky top-0 z-2 bg-white ">
      <h1>logo</h1>
      <ul className="flex gap-8">
        {navlist.map((list) => (
          <li key={list.name} className="relative group text-lg">
            <NavLink
              to={list.link}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-blue-400" : "text-gray-800"
                }`
              }
            >
              {list.name}
            </NavLink>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      <Button size="default">Let&apos; Talk</Button>
    </nav>
  );
}

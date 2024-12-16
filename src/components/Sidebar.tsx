import { navlist } from "@/constants/data";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  const navigate = useNavigate();

  function handleClick(e: MouseEvent<HTMLLIElement>, path: string) {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  }

  return (
    <div
      className={`absolute right-0 h-screen top-0 border-2 bg-white border-l-2 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "w-[300px]" : "w-0 m-0 p-0"
      }`}
    >
      <h1>menus</h1>

      <div className="grid place-content-center h-full gap-4 border-black">
        {navlist.map((item) => (
          <li
            className="list-none text-2xl hover:underline"
            onClick={(e) => handleClick(e, item.link)}
          >
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
}

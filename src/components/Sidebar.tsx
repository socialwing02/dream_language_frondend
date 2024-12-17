import { navlist } from "@/constants/data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div
      className={`fixed inset-0 h-screen [left:30%]  border-2 bg-white border-l-2 overflow-hidden ${
        !isOpen && "translate-x-full"
      } transition-all duration-500  `}
    >
      <h1>menus</h1>

      <div className="grid mt-[6rem] ml-14 gap-4 border-black">
        {navlist.map((item) => (
          <li
            className="list-none text-3xl hover:underline"
            onClick={handleClose}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

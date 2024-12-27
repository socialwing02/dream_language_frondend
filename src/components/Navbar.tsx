import { navlist } from "@/constants/data";
import { Button } from "./ui/Button";
import { NavLink } from "react-router-dom";
import hamburgIcon from "@/assets/svg/hamburg.svg";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import logo from "../assets/images/logo/Dream_language_academy.png";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let defaultClass =
    "flex justify-between px-8 py-0 items-center sticky top-0 z-2 ";
  defaultClass += className;
  const buttonstyle = className
    ? "bg-white text-black hover:text-white "
    : undefined;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section>
      <nav className={defaultClass}>
        <motion.h1>
          <img className=" w-[120px]" src={logo}></img>
        </motion.h1>

        <img
          src={hamburgIcon}
          alt=""
          className={`inline-block sm:hidden  p-0 ${
            className ? "bg-white rounded-full" : ""
          }`}
          onClick={() => setIsOpen(true)}
        />

        <motion.ul className="hidden gap-8 sm:flex">
          {navlist.map((list) => (
            <motion.li key={list.name} className="relative group text-lg">
              <NavLink
                to={list.link}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-black"
                  }`
                }
              >
                {list.name}
              </NavLink>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="hidden mr-9 sm:inline-block"
          initial="initial"
          animate="animate"
        >
          <Button className={buttonstyle}>Let&apos; Talk</Button>
        </motion.div>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

import { navlist } from "@/constants/data";
import { Link } from "react-router-dom";
import Icon from "../../src/assets/svg/whatsapp.svg";
import Insta from "../../src/assets/svg/instagram.svg";
import facebook from "../../src/assets/svg/FaceBook.svg";
import Youtube from "../../src/assets/svg/Youtube.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 border-t-[1px] border-x-gray-600">
      <div className="container mx-auto px-10 ">
        <div className="flex flex-wrap text-center  justify-between">
          <div className=" mb-4 md:mb-0  sm:text-left">
            <h6 className="text-black text-lg uppercase mb-3 ">Quick Links</h6>
            <ul className="inline-flex flex-col gap-2 ">
              {navlist.map((item, index) => (
                <Link to={item.link} key={index} className="hover:text-black">
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          <ul className="flex space-x-4 mt-9 py-[90px] gap-3 md:mt-0 justify-center">
            <li>something</li>
            <li></li>
            <li></li>
          </ul>

          <div className="text-black">
            <h2 className="text-[clamp(1.5rem,1.5vw,3rem)] pb-4 text-black">
              Contact us
            </h2>

            <div className="grid gap-4">
              <div className="flex gap-3">
                <LocalPhoneIcon />
                <p>+91 7845777082</p>
              </div>
              <div className="flex gap-3">
                <MailIcon />
                <p>example@gmail.com</p>
              </div>

              <div>Ad</div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-wrap justify-between items-center text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2025 All Rights Reserved by{" "}
            <a
              href="https://socialwing.in/"
              className="text-blue-400 hover:underline"
            >
              Socialwing
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

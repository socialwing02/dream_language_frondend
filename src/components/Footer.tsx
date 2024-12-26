import { navlist } from "@/constants/data";
import { Link } from "react-router-dom";
import Icon from "../../src/assets/svg/whatsapp.svg";
import Insta from "../../src/assets/svg/instagram.svg";
import facebook from "../../src/assets/svg/FaceBook.svg";
import Youtube from "../../src/assets/svg/Youtube.svg";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 border-t-[1px] border-x-gray-600">
      <div className="container mx-auto px-0 ">
        <div className="flex flex-wrap text-center  justify-between">
          <div className=" mb-4 md:mb-0 text-center sm:text-left">
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
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div>
            <h1 className="text-2xl text-black">Contact us</h1>
            <div className=" text-black">
              <span>email: dreamlanguageacademymydla@gmail.com</span>
              <h6>Contact : 9345427513</h6>

              <p>
                {" "}
                Address : R. VASUDEVAN (PRESIDENT)
                <br />
                No. 1, New Bangaru Naidu Colony,
                <br />
                K.K. Nagar (West), Chennai - 600078.
              </p>
            </div>
            <div className="flex gap-6 ">
              <a
                href={`https://wa.me/7845777082`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 mt-6" src={Icon} alt="WhatsApp Icon" />
              </a>
              <img className="w-6 py-6" src={Insta} alt="" />
              <img className="w-6" src={facebook} alt="" />
              <img className="w-6 " src={Youtube} alt="" />
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

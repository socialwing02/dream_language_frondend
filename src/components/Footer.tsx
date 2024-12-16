import { navlist } from "@/constants/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 border-t-[1px] border-x-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center justify-between">
          <div>
            <h1 className="text-2xl text-black">Contact us</h1>
            89876575677
            <div>
              <span>email:shsjskj@gmail.com</span>
              address
            </div>
          </div>

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

          <ul className="flex space-x-4 mt-9 py-[90px] gap-6 md:mt-0 justify-center">
            <li></li>
            <li></li>
            <li></li>
          </ul>
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

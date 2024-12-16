const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 border-t-[1px] border-x-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center justify-between">
          <div className="w-full gap-9 sm:w-1/2 md:w-1/4 mb-4 md:mb-0 text-center sm:text-left">
            <h6 className="text-white text-lg font-bold uppercase mb-3">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://scanfcode.com/about/"
                  className="hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/contact/"
                  className="hover:text-blue-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/contribute-at-scanfcode/"
                  className="hover:text-blue-400"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/privacy-policy/"
                  className="hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/sitemap/"
                  className="hover:text-blue-400"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 mb-4 md:mb-0 text-center sm:text-left">
            <h6 className="text-white text-lg font-bold uppercase mb-3">
              Categories
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://scanfcode.com/category/c-language/"
                  className="hover:text-blue-400"
                >
                  C
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/category/front-end-development/"
                  className="hover:text-blue-400"
                >
                  UI Design
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/category/back-end-development/"
                  className="hover:text-blue-400"
                >
                  PHP
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/category/java-programming-language/"
                  className="hover:text-blue-400"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/category/android/"
                  className="hover:text-blue-400"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="http://scanfcode.com/category/templates/"
                  className="hover:text-blue-400"
                >
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <ul className="flex space-x-4 mt-9 py-[90px] gap-6 md:mt-0 justify-center">
            <li>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-500"
              >
                <i className="fab fa-dribbble text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-700"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </li>
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

import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation().pathname;

  return (
    <>
      {location !== "/" && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      {location !== "/" && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

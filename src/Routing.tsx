import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Screen/Home";
import Courses from "./pages/Screen/Courses";
import About from "./pages/Screen/About";
import Contact from "./pages/Screen/Contact";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "course",
          element: <Courses />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

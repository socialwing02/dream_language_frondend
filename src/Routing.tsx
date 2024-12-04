import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Screen/Home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

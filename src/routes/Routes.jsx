import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Place from "../pages/place/Place";
import Error from "../pages/error/Error";

export default function KazaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="place/:id" element={<Place />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

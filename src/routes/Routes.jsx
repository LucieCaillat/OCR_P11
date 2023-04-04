import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Place from "../pages/place/Place";
import Error from "../pages/error/Error";

export default function KazaRoutes() {
  const [placeData, udatePlaceData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/datas/logements.json`);
        const data = await response.json();
        udatePlaceData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home places={placeData} />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="place/:id" element={<Place places={placeData} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, [location]);

  return null;
};

export const HomeContext = React.createContext(null);

function App() {
  const [homeKey, setHomeKey] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-in-out",
      once: false,
      offset: 0,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Nav onLogoClick={() => {
        setHomeKey((prev) => prev + 1);}} />
      <Routes>
        <Route path="/" element={<Home key={homeKey} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
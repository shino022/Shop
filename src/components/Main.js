import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ShopAll from "../pages/ShopAll";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <div id="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
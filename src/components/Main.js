import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ShopAll from "../pages/ShopAll";
import Contact from "../pages/Contact";

const Main = (props) => {
  return (
    <div id="Main" style={{zIndex:'2', position:'relative'}}>
      <Routes>
        <Route path="/Shop" element={<Home />} />
        <Route path="/Shop/shopall" element={<ShopAll  cart={props.cart} setCart={props.setCart}/>} />
        <Route path="/Shop/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
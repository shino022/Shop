import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { BrowserRouter } from "react-router-dom";
import { useEffect,useState } from "react";
import "./styles/App.css"
const App = () => {
  const [cart, setCart] = useState({})
  useEffect(()=>{
    console.log(cart); 
  })
  return (
    <div id="App">
      <Cart cart={cart} setCart={setCart}/>
      <BrowserRouter>
        <Header cart={cart}/>
        <Main setCart={setCart} cart={cart}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

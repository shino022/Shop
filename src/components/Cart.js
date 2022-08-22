import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"
import CartItems from "./CartItems.js";
import "../styles/Cart.css";

 

const Cart = (props) => {
  const [ items, setItems ] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [ total, setTotal ] = useState(0);
  useEffect(()=>{
    setItems(props.cart);
    let itemsTotal = 0;
    for(const id in props.cart) {
      const itemTotal = props.cart[id].price * props.cart[id].quantity;
      itemsTotal += itemTotal;
    }
    setTotal(itemsTotal);

  },[props.cart]);
  useEffect(()=>{
    const cartButton = document.getElementById('cart-button');
    cartButton.addEventListener('click', () => {setHidden(false);});
  },[])


  return (
    <div>
      {(!hidden) ? 
      <div id="cart-background" style={{zIndex:'3'}}>
        <div 
          id="Cart" 
          className="d-flex flex-column align-items-center p-5" 
          style={{zIndex:'5'}}>
          <button  
            id="xMark" 
            className="position-absolute top-0 end-0 m-3"
            onClick={()=>{setHidden(true)}}>
            <FaTimes/>
          </button>
          <h2>Shopping cart</h2>
          <CartItems setCart={props.setCart} items={props.cart}/>
          <h4>
            Total: ${Math.round(total*100)/100}
          </h4>
          <button className="btn btn-dark btn-lg">Checkout</button>
        </div>
      </div>: null}
    </div>
  );
}

export default Cart;
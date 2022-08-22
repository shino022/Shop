import { useState, useEffect } from "react";
import "../styles/Cart.css";
const Cart = (props) => {
  const [ items, setItems ] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(()=>{
    setItems(props.cart);
  },[props.cart]);
  useEffect(()=>{
    const cartButton = document.getElementById('cart-button');
    cartButton.addEventListener('click', () => {setHidden(false)});
    console.log(cartButton);
  },[])

  

  return (
    <div>
      {(!hidden) ? 
      <div id="cart-background" style={{zIndex:'3'}}>
        <div id="Cart" style={{zIndex:'5'}}>
          qweqwqe
        </div>
      </div>: null}
    </div>
    // <div id="cart-background" style={{zIndex:'3'}}>
    //   <div id="Cart" style={{zIndex:'5'}}>
    //     qweqwqe
    //   </div>
    // </div>
  );
}

export default Cart;
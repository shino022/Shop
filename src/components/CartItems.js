import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const CartItem = (props) => {
  const [visible, setVisible] = useState(true);
  
  const increaseOnClick = () => {
    const tempCart = {...props.items};
    tempCart[props.item.id].quantity += 1;
    props.setCart(tempCart);
  }

  const decreaseOnClick = () => {
    const tempCart = {...props.items};
    tempCart[props.item.id].quantity -= 1;
    props.setCart(tempCart);

    if(props.item.quantity===0){
      setVisible(false);
    }
  }

  useEffect(()=>{
    if(props.item.quantity===0){
      setVisible(false);
    }
  },[props]);

  return(
    <div>
      { visible && (
        <div 
          className="d-flex container justify-content-between rounded px-4 py-3 my-2" 
          style={{width:'320px'}}
          id="item">
          <div className="cart-img-wrapper">
            <img src={props.item.image} alt={props.item.title}/>
          </div>
          <div className="d-flex flex-column justify-content-between pb-1 ms-3">
            <div id="card-title">{props.item.title}</div>
            <div id ="card-price">${Math.round(props.item.price*props.item.quantity * 100) / 100}</div>
            <div id ="card-buttons"className="d-flex justify-content-between">
              <button onClick={decreaseOnClick}><div><FaMinus/></div></button>
              <div id="card-quantity">{props.item.quantity}</div>
              <button onClick={increaseOnClick}><div><FaPlus/></div></button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

const CartItems = (props) => {
  const [ itemList, setItemList] = useState([]);

  useEffect(()=>{ 
    setItemList(Object.values(props.items));
  },[props])
  return (
    <div id="cart-items" className="flex-grow-1 my-3">{/* wrapper for overflowing */}
      {
        itemList.map((item) => <CartItem items={props.items} key={item.id} setCart={props.setCart} item={item}/> )
      }
    </div>
  );
};




export default CartItems;
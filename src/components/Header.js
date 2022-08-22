import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const getTotalQuantity = () => {
    let quantity = 0;
    for( const key in props.cart ) {
        quantity += props.cart[key].quantity;
    }
    return quantity;
  }

  useEffect(()=>{
    setTotalQuantity(getTotalQuantity());
  },[props]);

  return (
    <div id="Header"  style={{zIndex:'2', position:'relative'}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid px-5">
          <span className="navbar-brand h1" id="brand">Shop</span>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopall">Shop All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="temp-wrapper d-flex">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <button id="cart-button" className="pt-2 ms-2">
              <FaShoppingCart id="cart-img"/>
              <div id="num-items">{totalQuantity}</div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
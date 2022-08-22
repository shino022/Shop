import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div id="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <div class="temp-wrapper d-flex">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <button id="cart" className="pt-2 ms-2">
              <FaShoppingCart id="cart-img"/>
              <div id="num-items">24</div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
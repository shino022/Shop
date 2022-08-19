import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Shop</h3>
      <nav>
        <ui>
          <Link to="/"><li>Home</li></Link> 
          <Link to="/shopall"><li>Shop All</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ui>
      </nav>
    </div>
  );
}

export default Header;
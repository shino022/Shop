import "../styles/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-grow-1 px-4 pt-5 my-5 text-center">
      <h1 className="display-1 fw-bold mb-1 pb-5 border-bottom border-dark mx-5" id="h1">Shop</h1>
      <div className="col-lg-6 mx-auto pb-3">
        <p className="mb-5 pb-3 lead">Shop what you love—faster and easier.</p>
        <div className="d-grid pt-5 col-5 mx-auto">
          <button type="button" className="btn btn-outline-dark btn-lg px-4 py-3 fw-bold">
            <Link className="nav-link" to="/shopall">EXPLORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
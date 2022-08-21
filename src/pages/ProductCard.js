const ProductCard = (id, image, title, description, price) => {
  return (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
    <div id="card" className="my-3">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
  );
}
export default ProductCard;
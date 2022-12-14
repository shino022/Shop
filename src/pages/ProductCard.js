const ProductCard = (props) => {
  const addToCart = ()=> {
    const setCart = props.setCart;
    const product = {...props.product};
    if(!(props.product.id in props.cart)) {
      product.quantity = 1; 
      setCart({...props.cart, [product.id]: product});
    } else {
      product.quantity = props.cart[product.id].quantity + 1;
      setCart({...props.cart, [product.id]: product});

    }
  }

  return (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
    <div id="card" className="my-3 p-4">
      <div className="img-container d-flex flex-column justify-content-center">
        <img src={props.product.image} className="card-img-top flex-grow-0" alt={props.product.title} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between mt-3">
        <div className="text-wrapper mb-2">
          <h5 className="card-title fw-bold">{props.product.title}</h5>
          <p className="card-text">{`$${props.product.price}`}</p>
        </div>
        <button id="add-to-cart-button" onClick={addToCart} className="py-2 fw-semibold">Add to cart</button>
      </div>
    </div>
  </div>
  );
}
export default ProductCard;
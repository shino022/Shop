import ProductCard from "./ProductCard";
import { useEffect,useState } from "react";
import "../styles/ShopAll.css";
const ShopAll = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetchProduct();
  },[]);

  useEffect(()=>{
    console.log(products);
  });

  const fetchProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    setProducts(data);
  }

  const productCards = products.map((product) => {
    return <ProductCard 
      key={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
       />
  });

  

  return (
    <div id="shop-background">
      <div id= "shop" className="container">
        <div id="cards" className="row">
          {productCards}
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
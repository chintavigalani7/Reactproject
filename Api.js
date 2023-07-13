import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css'
import ScrollToTopButton from "./ScrollToTopButton";
import { useDispatch } from "react-redux";


const Api = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
  }, []);

  return (
     <div>
    <h1 className='title'>Our Products</h1>
    <div className="card-container">
  {products.map((product) => {
    const productDesc =
      product.description.length > 30
        ? `${product.description.substring(0, 30)}...`
        : product.description;

    return (
        
      <div className="card" style={{ width: '18rem' }} key={product.id}>
       
        <img
          width="200px"
          height="190px"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            margin: 0,
            padding: 0,
          }}
          className="card-img-top"
          src={product.thumbnail}
          alt=""
        /> 
        <div className="card2-body">
          <h1 className="card-title">{product.title.substring(0, 18)}</h1>
          <p className="card-text">{productDesc}</p>
          <p className="card-price1">  {" "}
                    ${product.price}
                    <p className="card-pr1">{product.discountPercentage}% OFF</p>
                  </p>
          <Link to={`/products/${product.id}`} className="btn">
          View Details
          </Link>
        </div>
      </div>
    );
  })}
</div>
<ScrollToTopButton />
</div>
  );
};

export default Api;

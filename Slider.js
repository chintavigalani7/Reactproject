  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
import { Link } from 'react-router-dom';
  import './Style.css';

  const Slider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      "use strict";

      productScroll();

      axios.get('https://dummyjson.com/products')
        .then((response) => {
          setProducts(response.data.products);
          console.log(response.data);
        });

      function productScroll() {
        let slider = document.getElementById("slider");
        let next = document.getElementsByClassName("pro-next");
        let prev = document.getElementsByClassName("pro-prev");
        let slide = document.getElementById("slide");
        let item = document.getElementById("slide");

        for (let i = 0; i < next.length; i++) {
          let position = 0;

          prev[i].addEventListener("click", function () {
            if (position > 0) {
              position -= 1;
              translateX(position);
            }
          });

          next[i].addEventListener("click", function () {
            if (position >= 0 && position < hiddenItems()) {
              position += 1;
              translateX(position);
            }
          });
        }

        function hiddenItems() {
          let items = getCount(item, false);
          let visibleItems = Math.floor(slider.offsetWidth / 210);
          return items - visibleItems;
        }
      }

      function translateX(position) {
        let slide = document.getElementById("slide");
        slide.style.left = position * -210 + "px";
      }

      function getCount(parent, getChildrensChildren) {
        let relevantChildren = 0;
        let children = parent.childNodes.length;
        for (let i = 0; i < children; i++) {
          if (parent.childNodes[i].nodeType !== 3) {
            if (getChildrensChildren)
              relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
          }
        }
        return relevantChildren;
      }
    }, []);

    return (
      <div>
        <h1 className='title'>Our Products</h1>
        <div className="card-container">
          <div className="slider" id="slider">
            <div className="slide" id="slide">
      
              {products.map((product, index) => {
                const productDesc =
                  product.description.length > 30
                    ? `${product.description.substring(0, 30)}...`
                    : product.description;

                return (
                  <div className="product-item" key={index}>
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
    <p className="card-price">
      ${product.price}
      <span className="card-pr">{product.discountPercentage}% OFF</span>
    </p>
    <Link to={`/products/${product.id}`} className="btn">
            ADD TO CART
          </Link>
  </div>
  </div>

                  </div>
                );
              })}
            </div>
            <button className="ctrl-btn pro-prev">&#60;</button>
            <button className="ctrl-btn pro-next">&#62;</button>
          </div>
        </div>
      </div>
    
    );
  };

  export default Slider;


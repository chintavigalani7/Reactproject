import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Style.css';



const Home = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {

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
         <div
          id="carouselExampleControls"
          class="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg"
                class="d-block w-100 img-height"
                alt="..."
              />
            </div>
            <div class="carousel-item active">
              <img
                src="https://i.postimg.cc/L8fD1HXQ/myshop-banner-01.jpg "
                class="d-block w-100 img-height"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://myepro.net/admin/uploadws/sale-electronics-banner-background-free-vector.jpg"
                class="d-block w-100 img-height"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className='title'>Latest Products</h1>
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
                        height="200px"
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
                        View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="ctrl-btn pro-prev"><i class="fa-solid fa-less-than"></i></button>
            <button className="ctrl-btn pro-next"><i class="fa-solid fa-greater-than"></i></button>
          </div>
        </div>


      </div>

  );
};

export default Home;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("https://dummyjson.com/products?limit=8").then((response) => {
//       setProducts(response.data.products);
//       console.log(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <div class="content">
//         <div
//           id="carouselExampleControls"
//           class="carousel slide "
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-inner">
//             <div class="carousel-item">
//               <img
//                 src="https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg"
//                 class="d-block w-100 img-height"
//                 alt="..."
//               />
//             </div>
//             <div class="carousel-item active">
//               <img
//                 src="https://i.postimg.cc/L8fD1HXQ/myshop-banner-01.jpg "
//                 class="d-block w-100 img-height"
//                 alt="..."
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="https://myepro.net/admin/uploadws/sale-electronics-banner-background-free-vector.jpg"
//                 class="d-block w-100 img-height"
//                 alt="..."
//               />
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>

//         <div>
//           <h1 className="title">Latest Products</h1>
//         </div>
//         <div class="card-container">
//           {products.map((product) => {
//             const { id, title, description, thumbnail } = product;
//             const productDesc =
//               description.length > 40
//                 ? `${description.substring(0, 40)}...`
//                 : description;

//             return (
//               <div className="card" style={{ width: "18rem" }} key={product.id}>
//                 <img
//                   width="200px"
//                   height="190px"
//                   style={{
//                     borderTopLeftRadius: "10px",
//                     borderTopRightRadius: "10px",
//                     margin: 0,
//                     padding: 0,
//                   }}
//                   className="card-img-top"
//                   src={thumbnail}
//                   alt=""
//                 />
//                 <div className="card2-body">
//                   <h5 className="card-title">{title.substring(0, 19)}</h5>

//                   <p className="card-text">{productDesc}</p>
//                   <p className="card-price">
//                     {" "}
//                     ${product.price}
//                     <p className="card-pr">{product.discountPercentage}% OFF</p>
//                   </p>
                
//                   <Link to={`/products/${id}`} className="btn">
//                     ADD TO CART
//                   </Link>
                 
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
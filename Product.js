import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const addToCart = () => {
    axios.post(`http://localhost:3030/addtocart`, product).then((response) => {
      navigate(`/cart`, { replace: true });
      dispatch({ type: "inc" });
    });
  };

  const imageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <div className="card1">
        <div className="image-small-list">
          {product.images?.map((image, index) => (
            <div
              className={`image-small-list-item ${
                selectedImage === image ? "active" : ""
              }`}
              key={index}
              onClick={() => imageClick(image)}
            >
              <img
                src={image}
                alt={product.title}
                width="100px"
                height="100px"
              />
            </div>
          ))}
        </div>

        <div className="card2" style={{ width: "50rem" }} key={product.id}>
          <div>
            <img
              width="320px"
              height="320px"
              style={{
                borderRadius: "7px",
                marginTop: 0,
              }}
              className="card2-img-top"
              src={selectedImage || product.thumbnail}
              alt=""
            />
          </div>

          <div className="card2-body">
            <h1 className="card2-title">{product.title}</h1>
            <p className="card2-price"> ${product.price}</p>
            <p className="card2-text">{product.description}</p>
            <p className="card2-text">
              Up To {product.discountPercentage}% OFF
            </p>
            <p className="card2-text">
              <i className="fa-solid fa-star"></i> {product.rating}
            </p>

            <div style={{ display: "flex", gap: "9px", marginLeft: "-80px" }}>
              <button className="btn1">BUY NOW</button>
              <button className="btn2" onClick={addToCart}>
                <i className="fa-solid fa-lock"></i> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


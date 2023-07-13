import React, { createContext ,useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Head from "./Head";
import Home from "./Home";
import Api from "./Api";
import Product from "./Product";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import AboutUs from "./About";
// import Slider from "./Slider";
// import UseMemo from "./UseMemo";
import Cart from "./Cart";
import Loginform from "./Loginform";
import Register from "./Register";
import Dashboard from "./Dashboard";
export const CounterContext = createContext();
// export const CartContext = React.createContext();

function App() {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();

  const getSearch = (searchTerm) => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSearch(res.products);
      });
  };
  useEffect(() => {
    // Retrieve cart count from localStorage
    const cartCount = localStorage.getItem("cartCount");
    dispatch({ type: "setCount", payload: Number(cartCount) || 0 });
  }, [dispatch]);
  return (
   
    <BrowserRouter>
     <Header   value={getSearch} />
        <div className="card-container">
          {search.map((res) => {
            const productDesc =
              res.description.length > 30
                ? `${res.description.substring(0, 30)}...`
                : res.description;
            return (
              <div className="card" style={{ width: "18rem" }} key={res.id}>
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
                  src={res.thumbnail}
                  alt=""
                />
                <div className="card2-body">
                  <h1 className="card-title">{res.title.substring(0, 18)}</h1>
                  <p className="card-text">{productDesc}</p>
                  <p className="card-price">
                    {" "}
                    ${res.price}
                    <p className="card-pr">{res.discountPercentage}% OFF</p>
                  </p>

                  <Link to={`/products/${res.id}`} className="btn">
                    ADD TO CART
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Api />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginform/>}/>
          <Route path="/regis" element={<Register/>}/>
          <Route path="/dash" element={<Dashboard/>}/>

        </Routes>
  
     
        <Footer />
        {/* <div>
     <Head/>
       <button
      onClick={() => {
        dispatch({type: 'inc'})
      }}
      >INC</button>
      <button
      onClick={() => {
        dispatch({type: 'dec'})
      }}
      >DEC</button>
    </div> */}
        {/* <UseMemo/> */}
     
    </BrowserRouter>
);
}

export default App;



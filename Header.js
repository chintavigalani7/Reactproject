import React from "react";
// import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import { CounterContext } from "./App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartNumber from "./CartNumber";
  
const Header = (props) => {
  const navigate = useNavigate();

  const search = useContext(CounterContext);
  const [Category, setCategory] = useState("");

 const handleSubmit = (event, category) => {
    event.preventDefault();
    navigate(`/search`, { replace: true });
    setCategory(category);
    props.value(category); 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item myshop">
                <a
                  href="#myshop"
                  className="nav-link active"
                  aria-current="page"
                >
                  <i>MyShop</i>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page"
                onClick={"/home"}
                >
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
          
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dark-black"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#men"
                >
                  MEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#men" 
                     onClick={(event) => handleSubmit(event, "shirt")}>
                      shirt
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#shoes"
                    onClick={(event) => handleSubmit(event, "shoes")}>
                      shoes
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#watches"
                    onClick={(event) => handleSubmit(event, "watches")}>
                      watches
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dark-black"
                  href="#WOMEN"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WOMEN
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#jewellery"
                       onClick={(event) => handleSubmit(event, "jewellery")}>
                      jewellery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#dresses"
                     onClick={(event) => handleSubmit(event, "dress")}>
    
                      dresses
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#shoes"
                       onClick={(event) => handleSubmit(event, "shoes")}>
                      shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#watches"
                       onClick={(event) => handleSubmit(event, "watch")}>
                      watches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#bags"
                       onClick={(event) => handleSubmit(event, "bag")}>
                      bags
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tops"
                       onClick={(event) => handleSubmit(event, "tops")}>
                      tops
                    </a>
                  </li>
                </ul>
              </li>
{/* 
              <li className="nav-item dropdown">
             
                <a href="categories"
          
                  className="nav-link dropdown-toggle dark-black"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    
                    <a className="dropdown-item" href="#smartphones">
                      smartphones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#laptops">
                      laptops
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#fragrances">
                      fragrances
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#groceries">
                      groceries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#skincare">
                      skincare
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home-decoration">
                      home-decoration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#furniture">
                      furniture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#automotive">
                      automotive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#motorcycle">
                      motorcycle
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lighting">
                      lighting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sunglasses">
                      sunglasses
                    </a>
                  </li>
                 
                </ul> */}
                
                
              {/* </li> */}
              <li className="nav-item">
                <Link to="/products"
                  className="nav-link dark-black"
                 
                >
                  ALL
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/about"
                  className="nav-link dark-black"
                 
                >
                  ABOUT
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/contact"
                  className="nav-link dark-black"
                 
                >
                  CONTACT
                </Link>
                </li>
            </ul>

            <form classNameName="d-flex"
            >
              <Link to="/search">
              <input
                onKeyUp={(event) => {
                  props.value(event.target.value);
                }}
                classNameName="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
</Link>
                  {/* <Link to="/search" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link> */}

              <button classNameName="btnS submit" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* <i className="fa-solid fa-user mx-3"></i> */}
            <Link to="/login">
  <i className="fa-solid fa-user mx-3"></i>
</Link>

            <i className="fa-solid fa-heart mx-3"></i>
           <Link to="/cart"> <i className="fa-solid fa-cart-shopping mx-3"><CartNumber/></i>
           </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

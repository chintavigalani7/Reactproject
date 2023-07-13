import React from 'react'

const Footer = () => {
  return (
    <div>
          <div class="footer">
        <div class="footer-container">
          <div class="footer-icons">
            <span class="icon1">
              <i class="far fa-shield"></i>
              <h6 class="icon-text">1 Year Warrenty</h6>
            </span>

            <span class="icon2">
              <i class="fas fa-exchange-alt"></i>
              <h6 class="icon-text">Easy Return</h6>
            </span>

            <span class="icon3">
              <i class="far fa-shipping-fast"></i>
              <h6 class="icon-text">Fast Delivery</h6>
            </span>
          </div>

          <div class="socials">
            <h3>Connect with us</h3>
            <span class="social-icon">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
          </div>

          <div class="us">
            <h3>Get To Know Us</h3>
            <span class="us-links">
              <a href="#">About Us</a> &nbsp; &#124; &nbsp;
              <a href="#">Jobs</a> &nbsp; &#124; &nbsp;
              <a href="#">Terms &#38; Condition </a> &nbsp; &#124; &nbsp;
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <div class="copyright">
            <p>&copy; 2012-2023 Myshop.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React, { useEffect } from 'react';
import './Style.css'

const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = document.getElementById("myBtn");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <React.Fragment>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </React.Fragment>
  );
};

export default ScrollToTopButton;

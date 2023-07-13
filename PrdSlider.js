import React from "react";

export default function PrdSlider() {
  function change(name) {
    document.getElementById("one").src = name;
  }
  return (
    <div>
      <img
        height={"200px"}
        width={"200px"}
        src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
        alt=""
        id="one"
      />
      <img
        height={"200px"}
        width={"200px"}
        src="https://www.musafir.com/SFImage/Images/img-theme-park-015.jpg"
        alt=""
        onClick={() =>
          change(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLIlNbmP7RdIoAUYU_N6H6JpVSSuulgYlqQ&usqp=CAU"
          )
        }
        id="two"
      />

    </div>
  );
}




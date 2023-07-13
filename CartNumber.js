import React from "react";
import { useSelector } from "react-redux";

export default function CartNumber() {
  const first = useSelector((state) => {
    console.log(state);
    return state.Icon;
  });

  return (
    <sup
      style={{
        marginLeft: "20px",
        marginTop: "-14px",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        // backgroundColor: '#fbbc04',
        backgroundColor: "#ef838d",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "serif"
      }}
    >
      {first}
    </sup>
  );
}

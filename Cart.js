import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get("http://localhost:3030/addtocart").then((response) => {
      const itemsWithDefaultQuantity = response.data.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setCartItems(itemsWithDefaultQuantity);
    });
  }, []);

  
  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:3030/addtocart/${itemId}`).then(() => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    });
  };
  

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = 5.0;
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      {cartItems.length > 0 && (
        <div>
          <h2 style={{ margin: "30px", fontSize: "30px" }}>
            <i className="fa-solid fa-lock"></i> Shopping Cart
          </h2>
          <hr />
          <table className="cart-items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart-item-thumbnail">
                    <img src={item.thumbnail} alt="" />
                  </td>
                  <td className="cart-item-title">{item.title}</td>
                  <td className="cart-item-price">${item.price}</td>
                  <td className="cart-item-quantity">
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      name="quantity"
                      min="1"
                      max="5"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value);
                        const updatedCartItems = cartItems.map((cartItem) => {
                          if (cartItem.id === item.id) {
                            return { ...cartItem, quantity: newQuantity };
                          }
                          return cartItem;
                        });
                        setCartItems(updatedCartItems);
                      }}
                    />
                  </td>
                  <td className="cart-item-total">
                    ${item.price * item.quantity}
                  </td>
                  <td className="cart-item-delete">
                    <button onClick={() => handleDelete(item.id)}>
                      <i class="fa-solid fa-trash"
      onClick={() => {
        dispatch({type: 'dec'})
      }}></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <p>Subtotal: ${subtotal}</p>
            <p>Tax: ${tax}</p>
            <p>
              <b>Total: ${total}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;












// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3030/addtocart").then((response) => {
//       setCartItems(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       {cartItems.length > 0 && (
//         <div>
//           <h2>Cart Items:</h2>

//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                  <img
//           width="70px"
//           height="70px"
//           style={{
//             margin: 0,
//             padding: 0,
//           }}
//           src={item.thumbnail}
//           alt=""
//         />
//                 <p>{item.title}</p>
//                 <p>${item.price}</p>
//                 <p>{item.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Cart;

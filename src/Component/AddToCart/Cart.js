import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <>
    {!cart.length ? ( <div>
  <h2>Your cart is ematy</h2>
</div> ) : (    <div className="cart container">
<div className="cart">
  {cart.map((item) => {
    return (
      <div className="cartcad" key={item.id}>
          <img src={item.image} alt="cart" />
          <h4>{item.name}</h4>
        <div className="text_dece">
        <p> price: Pkr. {item.price}</p>
          <p>amount : Pkr.{item.price * item.quantity}</p>
        </div>
        <div className="cart-btn">
        <button
            onClick={() => dispatch({ type: "REMOVE", payload: item })}
          >
          <FaTrash />
          </button>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: item })}
          >
          <FaPlus />
          </button>
          <p className="p_count">{item.quantity}</p>
          <button
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "DECREASE", payload: item });
              } else {
                dispatch({ type: "REMOVE", payload: item });
              }
            }}
          >
          <FaMinus />
          </button>
        </div>
        {total > 0 && <h2 className="mt-3">total:{total}</h2>}
      </div>
    );
  })}
</div>
</div>)}
    </>
  );
};

export default Cart;

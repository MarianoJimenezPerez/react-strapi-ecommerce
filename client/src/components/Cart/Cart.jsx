import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {products.map((item) => (
        <div className="product" key={item.id}>
          <img src={item.img} alt="" />
          <div className="product__detail">
            <Link
              to={`/product/${item.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <h3>{item.title}</h3>
            </Link>
            <div className="product__price">
              {item.quantity} x {"$" + item.price}
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>
          ${" "}
          {products.reduce(
            (acc, current) => acc + current.price * current.quantity,
            0
          )}
        </span>
      </div>
    </div>
  );
};

export default Cart;

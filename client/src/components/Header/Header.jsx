import React, { useRef, useState } from "react";
import { HiMagnifyingGlass, AiOutlineShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";
import "./Header.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cart.products);

  const handleClick = () => {
    const cart = document.querySelector(".cart");
    const product = document.querySelector(".product__container");
    cart.classList.toggle("visible");
    product.classList.toggle("inactive");
  };
  return (
    <>
      <header className="container header__container">
        <div className="left">
          <h1>MJ</h1>
        </div>
        <div className="center">
          <form action="">
            <input type="text" placeholder="¿Qué deseas buscar?" />
            <HiMagnifyingGlass />
          </form>
        </div>
        <div className="right">
          <div className="cart__icon" onClick={handleClick}>
            <AiOutlineShoppingCart />
            <span>
              {products.length !== 0
                ? products.reduce(
                    (acc, current) => acc + current.quantity,
                    0
                  )
                : 0}
            </span>
          </div>
        </div>
      </header>
      <Cart />
    </>
  );
};

export default Header;

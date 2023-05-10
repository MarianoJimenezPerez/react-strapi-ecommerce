import React from "react";
import "./ProductCarousel.scss";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const data = {
    categoryTitle: "Computadoras",
    products: [
      {
        id: 1,
        title: "Computadora 1",
        img: "url",
        price: 20,
        newPrice: 15,
      },
      {
        id: 2,
        title: "Teclado 1",
        img: "url",
        price: 300,
        newPrice: 270,
      },
      {
        id: 3,
        title: "Teclado 2",
        img: "url",
        price: 250,
        newPrice: 230,
      },
      {
        id: 4,
        title: "Teclado 3",
        img: "url",
        price: 350,
        newPrice: 320,
      },
      {
        id: 5,
        title: "Teclado 4",
        img: "url",
        price: 220,
        newPrice: 210,
      },
      {
        id: 6,
        title: "Teclado 5",
        img: "url",
        price: 260,
        newPrice: 230,
      },
    ],
  };
  return (
    <section className="product__carousel__container">
      <div className="container">
        <div className="product__carousel__header">
          <h3>{data.categoryTitle}</h3>
          <Link to={`/products/${data.categoryTitle}`}>Ver todo ➜</Link>
        </div>
        <div className="product__carousel__content">
          {data.products.map((product) => (
            <div className="product__card" key={product.id}>
              <img src={product.img} alt={product.title} />
              <h4>{product.title}</h4>
              <div className="product__Card__price">
                <span>${product.price}</span>
                <span>${product.newPrice}</span>
              </div>
              <Link to={`/product/${product.id}`}>Ver producto</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

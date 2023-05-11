import React from "react";
import "./ProductCarousel.scss";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const ProductCarousel = () => {
  const data = {
    categoryTitle: "Computadoras",
    products: [
      {
        id: 1,
        title: "Computadora 1",
        img: "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 20,
        newPrice: 15,
      },
      {
        id: 2,
        title: "Teclado 1",
        img: "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        newPrice: 270,
      },
      {
        id: 3,
        title: "Teclado 2",
        img: "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 250,
        newPrice: 230,
      },
      {
        id: 4,
        title: "Teclado 3",
        img: "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 350,
        newPrice: 320,
      }
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
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

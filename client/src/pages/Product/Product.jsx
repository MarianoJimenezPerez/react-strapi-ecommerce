import React, { useState } from "react";
import ProductCarousel from "./../../components/ProductCarousel/ProductCarousel";
import "./Product.scss";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/214487/pexels-photo-214487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <div className="product__container">
        <div className="container">
          <div className="product__images">
            <div className="images">
              <img
                src={images[0]}
                alt=""
                onClick={(e) => setSelectedImage(0)}
              />
              <img
                src={images[1]}
                alt=""
                onClick={(e) => setSelectedImage(1)}
              />
            </div>
            <div className="main__image">
              <img src={images[selectedImage]} alt="" />
            </div>
          </div>
          <div className="product__content">
            <h1>Product name</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              autem adipisci voluptatum id eos obcaecati facere praesentium a
              nesciunt quam minus minima nemo, fugiat debitis iste voluptatem
              itaque aliquid deserunt omnis explicabo eligendi aliquam. Et
              consequatur laborum tempore obcaecati provident.
            </p>
            <div className="product__price">
              <span>$80</span>
              <span>$60</span>
            </div>
            <div className="product__quantity"></div>
            <button className="btn btn__primary">Add to cart</button>
          </div>
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import ProductCarousel from "./../../components/ProductCarousel/ProductCarousel";
import "./Product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const { name } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const uploadUrl = import.meta.env.VITE_APP_UPLOAD_URL;

  const dispatch = useDispatch();

  const images = [];

  const {
    data: product,
    loading,
    error,
  } = useFetch(
    `/products/?populate=*&filters[title][$contains]=${name.replace(/-/g, " ")}`
  );
  images.push(product?.[0]?.attributes?.img?.data?.attributes.url);
  images.push(product?.[0]?.attributes?.img2?.data?.attributes.url);

  const modifiedImages = images.map((image) => {
    return uploadUrl + image;
  });

  return (
    <div>
      <div className="product__container">
        <div className="container">
          <div className="product__images">
            <div className="images">
              <img
                src={modifiedImages[0]}
                alt=""
                onClick={(e) => setSelectedImage(0)}
              />
              <img
                src={modifiedImages[1]}
                alt=""
                onClick={(e) => setSelectedImage(1)}
              />
            </div>
            <div className="main__image">
              <img src={modifiedImages[selectedImage]} alt="" />
            </div>
          </div>
          <div className="product__content">
            <h1>{product?.[0]?.attributes?.title}</h1>
            <p>{product?.[0]?.attributes?.description?.slice(0, 300)}...</p>
            <div className="product__price">
              <span>${product?.[0]?.attributes?.old_price}</span>
              <span>${product?.[0]?.attributes?.price}</span>
            </div>
            <div className="product__quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="btn btn__primary"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product[0].attributes.title,
                    description: product[0].attributes.description,
                    price: product[0].attributes.price,
                    quantity: quantity,
                    img: modifiedImages[0],
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>{" "}
      {/* <ProductCarousel /> */}
    </div>
  );
};

export default Product;

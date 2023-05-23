import React from "react";
import "./ProductCarousel.scss";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const ProductCarousel = ({ category, type }) => {
  const { data, loading, error } = useFetch("/products", {
    params: {
      populate: "*",
      filters: {
        categories: {
          title: category,
        },
        type: type,
      },
    },
  });

  return (
    <section className="product__carousel__container">
      <div className="container">
        {error ? (
          "Something went wrong. Try again in a few minutes"
        ) : loading ? (
          "Loading..."
        ) : (
          <>
            <div className="product__carousel__header">
              <h3>{category}</h3>
              <Link to={`/products/${category}`}>Ver todo ➜</Link>
            </div>
            <div className="product__carousel__content">
              {data?.map((product) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;

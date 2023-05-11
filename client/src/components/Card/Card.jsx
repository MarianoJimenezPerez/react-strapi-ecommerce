import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss"

const Card = ({product}) => {
  return (
    <div className="card" key={product.id}>
      <img src={product.img} alt={product.title} />
      <h4>{product.title}</h4>
      <div className="card__price">
        <span>${product.price}</span>
        <span>${product.newPrice}</span>
      </div>
      <Link to={`/product/${product.id}`}>Ver producto</Link>
    </div>
  );
};

export default Card;

import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss"

const Card = ({product}) => {

  const titleFormat= product?.attributes?.title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="card">
      <img src={import.meta.env.VITE_APP_UPLOAD_URL + product?.attributes?.img?.data?.attributes?.url} alt={product?.attributes?.title} />
      <h4>{product?.attributes?.title}</h4>
      <div className="card__price">
        <span>${product?.attributes?.old_price}</span>
        <span>${product?.attributes?.price}</span>
      </div>
      <Link to={`/product/${titleFormat}`}>Ver producto</Link>
    </div>
  );
};

export default Card;

import React from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";

const Products = () => {
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
      },
    ],
  };
  return (
    <div className="products__container">
      <div className="container">
        <div className="left">
          <div className="filter__item">
            <h3>Product categories</h3>
            <div className="input__item">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Computers</label>
            </div>
          </div>
          <div className="filter__item">
            <h3>Filter by price</h3>
            <div className="input__item">
              <span>0</span>
              <input type="range" min={0} max={1000} />
              <span>1000</span>
            </div>
          </div>
          <div className="filter__item">
            <h3>Sort by</h3>
            <div className="input__item">
              <input type="radio" id="asc" value={"asc"} name="price" />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="input__item">
              <input type="radio" id="desc" value={"desc"} name="price" />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="product__list">
            {data.products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

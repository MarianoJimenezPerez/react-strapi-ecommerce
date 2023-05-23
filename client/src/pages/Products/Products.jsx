import React, { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const Products = () => {
  const { category } = useParams();
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch("/categories", {
    params: {
      populate: "*",
      filters: {
        title: category,
      },
    },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(data);

  return (
    <div className="products__container">
      <div className="container">
        <div className="left">
          <div className="filter__item">
            <h3>Product categories</h3>
            {data?.[0]?.attributes?.sub_categories?.data?.map((subCat) => (
              <div className="input__item" key={subCat.id}>
                <input
                  type="checkbox"
                  id={subCat.id}
                  value={subCat.id}
                  onChange={handleChange}
                />
                <label htmlFor={subCat.id}>{subCat.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filter__item">
            <h3>Filter by price</h3>
            <div className="input__item">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>1000000</span>
            </div>
          </div>
          <div className="filter__item">
            <h3>Sort by</h3>
            <div className="input__item">
              <input
                type="radio"
                id="asc"
                value={"asc"}
                name="price"
                onChange={(e) => setSort("asc")}
                defaultChecked
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="input__item">
              <input
                type="radio"
                id="desc"
                value={"desc"}
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              data?.[0]?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
          <div className="product__list">
            {loading ? (
              "loading"
            ) : (
              <List
                sort={sort}
                subCats={selectedSubCats}
                category={data?.[0]?.attributes?.title}
                maxPrice={maxPrice}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

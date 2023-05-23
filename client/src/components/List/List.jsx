import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

const List = ({ subCats, maxPrice, sort, category }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][title]=${category}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
    
  return (
    <>
      {loading
        ? "loading"
        : data?.map((product) => <Card product={product} key={product.id} />)}
    </>
  );
};

export default List;

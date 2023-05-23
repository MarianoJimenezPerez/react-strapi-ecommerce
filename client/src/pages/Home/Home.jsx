import React from "react";
import Hero from "../../components/Hero/Hero";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCarousel category="Computacion" type="Featured" />
      <ProductCarousel category="Perifericos" type="Featured" />
    </>
  );
};

export default Home;

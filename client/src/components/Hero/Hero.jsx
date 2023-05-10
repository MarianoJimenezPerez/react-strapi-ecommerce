import React from "react";
import img from "./../../assets/hero_img.jpg";
import "./Hero.scss";


const Hero = () => {
  return (
    <section className="hero__container">
      <img src={img} alt="Persona sorprendida " />
      <div className="container">
        <div className="hero__description">
          <h2>Febrero promocional</h2>
          <span>Productos selecionados con 33% de descuento</span>
          <button className="btn btn__primary">Ver productos</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container__footer">
      <div className="container">
        <div className="footer__top__bar">
          <div className="left">
           <h2>MJ</h2>
          </div>
          <div className="center">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/"}>Como comprar</Link></li>
              <li><Link to={"/"}>Policas de seguridad</Link></li>
              <li><Link to={"/"}>Quienes somos</Link></li>
              <li><Link to={"/"}>Contacto</Link></li>
            </ul>
          </div>
          <div className="right">
            <h4>Ponte en contacto con nosotros</h4>
            <form action="">
              <input type="text" placeholder="Asunto"/>
              <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
              <button className="btn btn__primary">Enviar</button>
            </form>
          </div>
        </div>
        <div className="footer__bottom__bar">
          <h3>© Todos los derechos reservados. Mariano Jiménez Pérez 2022</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

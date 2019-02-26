import React from "react";
import "./Home.css";
import { Facebook, Instagram } from "../../Components/witgets/SocialLinks";
import Background1 from "../../Components/Imagenes/Background1";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="Home">
      <div className="backgroundImage">
        <div className="yellowBox" />
        <Background1 />
      </div>
      <div className="header">
        <div className="logoContainer">
          <div className="logo"> Restaurante </div>
        </div>
        <div className="Nav">
          <Link to="/Menu">Menu</Link>
          <Link to="/Marca">Sobre Nosotros</Link>
          <Link to="/Contacto">Contacto</Link>
        </div>
        <div className="HomeFooter">
          <div className="SocialLinks">
            <Facebook />
            <Instagram />
          </div>
          <p className="Copyright">
            Copyright © 2019 Diaz J. Mauricio All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "../witgets/SocialLinks";

const NavBar = props => {
  return (
    <div className="NavBarcontainer">
      <div className="NavBar desktop">
        <div className="NavOrder">
          <div className="Nav">
            <Link to="/">
              <p>Inicio </p>
            </Link>
            <Link to="/Menu">
              {props.select === "menu" ? (
                <p className="select">Menu </p>
              ) : (
                <p>Menu </p>
              )}
            </Link>
            <Link to="/Marca">
              {props.select === "nosotros" ? (
                <p className="select">Nosotros </p>
              ) : (
                <p>Nosotros </p>
              )}
            </Link>
            <Link to="/Contacto">
              {props.select === "contacto" ? (
                <p className="select">Contacto </p>
              ) : (
                <p>Contacto </p>
              )}
            </Link>
          </div>
          <div className="SocialLinks">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="NavBar mobile">
        <div className="NavOrderMobile">
          <input type="checkbox" id="mobileMenu" />
          <label htmlFor="mobileMenu" className="changeMobileMenuBtn">
            <i className="fas fa-bars" />
          </label>
          <div className="MobileMenuContainer">
            <div className="MobileMenuContent">
              <div className="Nav">
                <Link to="/">
                  <p>Inicio </p>
                </Link>
                <Link to="/Menu">
                  {props.select === "menu" ? (
                    <p className="select">Menu </p>
                  ) : (
                    <p>Menu </p>
                  )}
                </Link>
                <Link to="/Marca">
                  {props.select === "nosotros" ? (
                    <p className="select">Nosotros </p>
                  ) : (
                    <p>Nosotros </p>
                  )}
                </Link>
                <Link to="/Contacto">
                  {props.select === "contacto" ? (
                    <p className="select">Contacto </p>
                  ) : (
                    <p>Contacto </p>
                  )}
                </Link>
              </div>
              <div className="SocialLinks">
                <Facebook />
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

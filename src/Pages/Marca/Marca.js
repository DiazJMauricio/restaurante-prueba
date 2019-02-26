import React from "react";
import "./Marca.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import bgimg from "../../Img/bg1_Large.jpg";

const backgroundImgStyle = {
  background: `url(${bgimg}) center center no-repeat`,
  backgroundSize: "cover"
};

const Marca = props => {
  return (
    <div className="Marca">
      <NavBar select="nosotros" />
      <div className="flexContainer">
        <div className="nosotrosContainer">
          <div className="textContainer">
            <div className="nosotros">
              <h1>Restaurante</h1>
              <p className="text">
                Texto de prurba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba
                <br />
                <br />
                Texto de prurba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba texto de prueba texto de prueba texto de prueba
                texto de prueba
              </p>
            </div>
            <div className="chefsContainer">
              <h2>Nuestros Chefs</h2>
              <div className="chefs">
                <div className="chef">
                  <div className="chefImg" />
                  <p>Nombre de Chef</p>
                  <p>titulos de Chef</p>
                </div>
                <div className="chef">
                  <div className="chefImg" />
                  <p>Nombre de Chef</p>
                  <p>titulos de Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer" style={backgroundImgStyle}>
          {/* <Background1 /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marca;

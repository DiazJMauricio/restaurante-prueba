import React from "react";
import "./Contacto.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import burger from "../../Img/burger.jpg";

const backgroundImgStyle = {
  background: `url(${burger}) center center no-repeat`,
  backgroundSize: "cover"
};

const Contacto = props => {
  return (
    <div className="Contacto">
      <NavBar select="contacto" />
      <div className="flexContainer">
        <div className="imgContainer" style={backgroundImgStyle} />
        <div className="contactContainer">
          <div className="flexContainerInfo">
            <div className="Horario">
              <h2>Horarios</h2>
              <div className="h-item">
                <p>Lunes</p>
                <p>9:00 - 21:00</p>
              </div>
              <div className="h-item">
                <p>Martes</p>
                <p>9:00 - 21:00</p>
              </div>
              <div className="h-item">
                <p>Miercoles</p>
                <p>cerrado</p>
              </div>
              <div className="h-item">
                <p>Jueves</p>
                <p>9:00 - 21:00</p>
              </div>
              <div className="h-item">
                <p>Viernes</p>
                <p>9:00 - 2:00</p>
              </div>
              <div className="h-item">
                <p>Sabado</p>
                <p>10:00 - 2:00</p>
              </div>
              <div className="h-item">
                <p>Domingo</p>
                <p>11:00 - 21:00</p>
              </div>
            </div>
            <div className="sucursales">
              <div className="sucursal">
                <h2>Sucursal</h2>
                <p>direccion direccion</p>
              </div>
              <div className="sucursal">
                <h2>Sucursal</h2>
                <p>direccion direccion</p>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="bannerItem">
              <h2>Email</h2>
              <p>email@email.com</p>
            </div>
            <div className="bannerItem">
              <h2>Teléfono</h2>
              <p>+12 123 123 123</p>
            </div>
          </div>
          <div className="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13341.59199359706!2d-66.3491349698364!3d-33.28224928417051!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1551140908464"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "85%" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;

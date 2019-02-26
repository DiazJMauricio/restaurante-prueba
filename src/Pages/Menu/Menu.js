import React, { useState } from "react";
import "./Menu.css";
import MenuData from "./Menu.json";
import NavBar from "../../Components/NavBar/NavBar";
import Pizza1 from "../../Components/Imagenes/Pizza1";
import Footer from "../../Components/Footer/Footer";

export const MenuLabel = props => {
  var { vegano, title, info } = props.data;
  var className = "MenuLabel";
  if (vegano !== undefined) {
    className += " vegano";
    if (props.On) {
      className += " on";
    }
  }
  // var className = vegano !== undefined ? "MenuLabel vegano" : "MenuLabel";
  return (
    <div className={className}>
      <h5>{title}</h5>
      {info !== undefined ? <p>{info}</p> : null}
    </div>
  );
};

const Menu = props => {
  const [vegano, setVegano] = useState(false);
  let veganoOn = vegano ? "on" : "";
  return (
    <div className="Menu">
      <div className="changeMenu">
        <div className="stikyContainer">
          <input
            type="checkbox"
            id="vegano"
            onClick={() => setVegano(!vegano)}
          />
          <label htmlFor="vegano" className="changeMenuBtn">
            Menu Vegano
          </label>
        </div>
      </div>
      <NavBar select="menu" />
      <div className="MenuContainer">
        <div className={`MenuGroup level-1 vegano ${veganoOn}`}>
          {vegano ? (
            <h1 className="MenuTitle">Menu Vegano</h1>
          ) : (
            <h1 className="MenuTitle">Menu</h1>
          )}
        </div>
        <div className="MenuGroup level-2">
          <h2>Pizzas</h2>
          <div className="MenuList">
            {MenuData.pizzas.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>
        <div className="MenuGroup level-1">
          <div className="menuImg">
            <Pizza1 />
          </div>
        </div>
        <div className="MenuGroup level-1">
          <h2>Hamburguesas</h2>
          <div className="MenuList">
            {MenuData.hamburguesas.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>
        <div className="MenuGroup level-1">
          <h2>Ensaladas</h2>
          <div className="MenuList">
            {MenuData.ensaladas.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>
        <div className={`MenuGroup level-1 vegano `}>
          <h2>Papas fritas</h2>
          <div className="MenuList">
            {MenuData.papas.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>

        <div className={`MenuGroup level-2 vegano ${veganoOn}`}>
          <h2>Bebidas</h2>
          <div className="MenuList">
            {MenuData.bebidas.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>
        <div className={`MenuGroup level-2 vegano `}>
          <h2>Cafe</h2>
          <div className="MenuList">
            {MenuData.cafes.map(i => {
              return <MenuLabel data={i} On={vegano} />;
            })}
          </div>
        </div>
        <div className="MenuGroup level-2">
          <div className="menuImg">
            <Pizza1 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;

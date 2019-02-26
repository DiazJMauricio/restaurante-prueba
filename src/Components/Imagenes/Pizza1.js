import React from "react";
import PizzaSmall from "../../Img/pizzaSmall.jpg";
import PizzaMedium from "../../Img/pizzaMedium.jpg";
import PizzaLarge from "../../Img/pizzaLarge.jpg";

const Pizza1 = props => {
  return (
    <picture alt="Pizza">
      <source srcSet={PizzaLarge} media="(min-width: 512px)" />
      <source srcSet={PizzaMedium} media="(min-width: 256px)" />
      <img src={PizzaSmall} alt="Pizza" />
    </picture>
  );
};

export default Pizza1;

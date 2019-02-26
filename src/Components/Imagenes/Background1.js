import React from "react";
import bg1extraSmall from "../../Img/bg1_extraSmall.jpg";
import bg1small from "../../Img/bg1_small.jpg";
import bg1medium from "../../Img/bg1_Medium.jpg";
import bg1Large from "../../Img/bg1_Large.jpg";

const Background1 = props => {
  return (
    <picture alt="Local">
      <source srcSet={bg1Large} media="(min-height: 1080px)" />
      <source srcSet={bg1medium} media="(min-height: 512px)" />
      <source srcSet={bg1small} media="(min-height: 256px)" />
      <img src={bg1extraSmall} alt="Local" />
    </picture>
  );
};

export default Background1;

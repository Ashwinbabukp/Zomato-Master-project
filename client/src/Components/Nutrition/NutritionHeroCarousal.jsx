import React, { useState } from "react";
import Slider from "react-slick";

// components
import NutritionHeroCarousalCard from "./NutritionHeroCarousalCard";
import { NextArrow, PrevArrow } from "../CarousalArrow";
const NutritionCarousal = () => {
  const [heroBanners, setHeroBanners] = useState([
    "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
  ]);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {heroBanners.map((image) => (
        <NutritionHeroCarousalCard image={image} />
      ))}
    </Slider>
  );
};

export default NutritionCarousal;

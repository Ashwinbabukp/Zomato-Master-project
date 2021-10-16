import React, { Component } from "react";
import {RiSearch2Line} from "react-icons/ri"

// components
import DeliveryCatagory from "./DeliveryCatagory";

const DeliveryCarousal = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2d55f153622b5172951790bc367e46691632716547.png",
      title: "Shawarma",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png",
      title: "Noodles",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/a809638963a5e965c98b3a25fcdb054d1632716606.png",
      title: "Parotta",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
      title: "Paneer",
    },
  ];

  return (
    <>
      <div className="flex w-full items-center gap-2 md:hidden">
        <RiSearch2Line />
        <input
          type="search"
          placeholder="Search for restaurant, cuisine or a dish"
          className="w-full focus:outline-none"
        />
      </div>
      <h1 className="text-xl mb-4 mt-5 font-semibold">
        Inspiration for your first order
      </h1>
      <div className="flex gap-4 md:gap-5 lg:gap-y-10 grid-cols-4 flex-wrap">
        {categories.map((food) => (
          <DeliveryCatagory {...food} />
        ))}
      </div>  
    </>
  );
};

export default DeliveryCarousal;

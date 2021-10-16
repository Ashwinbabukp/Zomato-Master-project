import React from "react";

// components
import PictureCarousalCard from "../PictureCarousal";


const DiningCarousal = () => {
  return (
    <div className="">
      {/* <Slider {...settings}> */}
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
      {/* </Slider> */}
    </div>
  );
};


export default DiningCarousal;

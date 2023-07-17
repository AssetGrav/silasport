import React from "react";
import CarouselComponent from "../common/CarouselComponent";

const ServicesCarousel = ({ works, num }) => {
  return (
    <div className="px-5 ">
      <div className="flex justify-center text-red text-2xl font-bold mt-10 mb-5">
        НАШИ РАБОТЫ
      </div>
      <CarouselComponent works={works} number="w-full h-96" num={num} />
    </div>
  );
};

export default ServicesCarousel;

import React from "react";
import CarouselComponent from "../common/CarouselComponent";
import { hockeyWorks } from "../../api/hockey-works.api";

const ServicesCarousel = () => {
  return (
    <div className="px-5 ">
      <div className="flex justify-center text-red text-2xl font-bold mt-10 mb-5">
        НАШИ РАБОТЫ
      </div>
      <CarouselComponent works={hockeyWorks} number="w-full h-96" num={4} />
    </div>
  );
};

export default ServicesCarousel;

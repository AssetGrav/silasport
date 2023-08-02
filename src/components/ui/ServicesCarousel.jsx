import React from "react";
import CarouselComponent from "../common/CarouselComponent";

const ServicesCarousel = ({ works, num }) => {
  return (
    <div className="px-5 ">
      <div className="flex justify-center text-red text-2xl font-bold mt-10 mb-10">
        НАШИ РАБОТЫ
      </div>
      <CarouselComponent
        works={works}
        number="w-full h-[200px] md:h-[300px]"
        num={num}
      />
    </div>
  );
};

export default ServicesCarousel;

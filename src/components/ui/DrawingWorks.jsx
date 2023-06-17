import React from "react";
import CarouselComponent from "../common/CarouselComponent";
import { drawingWorks } from "../../api/drawing-works.api";

const DrawingWorks = () => {
  return (
    <div className="px-5 ">
      <div className="flex justify-center text-red text-2xl font-bold mt-10 mb-5">
        НАШИ РАБОТЫ
      </div>
      <CarouselComponent works={drawingWorks} number="w-full h-56" num={4} />
    </div>
  );
};

export default DrawingWorks;

import React from "react";
import { useKits } from "../hook/useKits";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import CarouselComponent from "../common/CarouselComponent";

const OurWorks = () => {
  const { works } = useKits();

  return (
    <div className="px-5 ">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        НАШИ РАБОТЫ
      </h1>
      <CarouselComponent works={works} number="w-full h-56" num={3} />
      <div className="flex justify-center">
        <Button text="СМОТРЕТЬ ВСЕ РАБОТЫ" />
      </div>
    </div>
  );
};

export default OurWorks;

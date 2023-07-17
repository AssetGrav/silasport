import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "../common/CarouselComponent";
import { Link } from "react-router-dom";
import { works } from "../../api/works-gallery.api";

const OurWorks = () => {
  const newWorks = works.filter((elem, index) => {
    return index < 10 && elem;
  });
  return (
    <div className="px-5 ">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-14 mb-10">
        НАШИ РАБОТЫ
      </h1>
      <CarouselComponent works={newWorks} number="w-full h-72" num={3} />
      <div className="flex justify-center">
        <Link to="/gallery">
          <button className="max-h-10 text-justify bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-2  border border-blue hover:border-red rounded">
            СМОТРЕТЬ ВСЕ РАБОТЫ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurWorks;

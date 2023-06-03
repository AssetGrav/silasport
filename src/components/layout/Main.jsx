import React from "react";
import Baner from "../ui/Baner";
import Catalog from "../ui/Catalog";
import CarouselItems from "../ui/CarouselItems";
import OurWorks from "../ui/OurWorks";

const Main = () => {
  return (
    <div className="container">
      <Baner />
      <Catalog />
      <CarouselItems />
      <OurWorks />
    </div>
  );
};

export default Main;

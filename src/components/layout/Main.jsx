import React from "react";
import Baner from "../ui/Baner";
import Catalog from "../ui/Catalog";
import CarouselItems from "../ui/CarouselItems";
import OurWorks from "../ui/OurWorks";
import Advantages from "../ui/Advantages";
import OurClients from "../ui/OurClients";
import AboutUsVideo from "../ui/AboutUsVideo";

const Main = () => {
  return (
    <div className="container pt-36">
      <Baner />
      <Catalog />
      <CarouselItems />
      <OurWorks />
      <Advantages />
      <OurClients />
      <AboutUsVideo />
    </div>
  );
};

export default Main;

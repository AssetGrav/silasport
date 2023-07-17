import React from "react";
import Baner from "../ui/Baner";
import Catalog from "../ui/BanerCatalog";
import OurWorks from "../ui/OurWorks";
import Advantages from "../ui/Advantages";
import OurClients from "../ui/OurClients";
import AboutUsVideo from "../ui/AboutUsVideo";
import Carousel from "../ui/Models";

const Main = () => {
  return (
    <div className="pt-36">
      <Baner />
      <Catalog />
      <Carousel />
      <OurWorks />
      <Advantages />
      <OurClients />
      <AboutUsVideo />
    </div>
  );
};

export default Main;

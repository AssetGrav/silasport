import React from "react";
import LinkArrow from "../ui/LinkArrow";
import ProductBaner from "../ui/products/ProductBaner";
import ButtonList from "./ButtonList";
import ProductsList from "../ui/ProductsList";
import Advantages from "../ui/Advantages";
import Drawing from "../ui/Drawing";
import ServicesCarousel from "../ui/ServicesCarousel";
import DrawingText from "../ui/DrawingText";

const DrawingComponent = ({
  linkName,
  name,
  fileName,
  buttons,
  kits,
  works,
  photo,
}) => {
  return (
    <div className="container pt-36 pb-10">
      <div className="px-5">
        <LinkArrow name={linkName} />
        <h1 className="flex justify-center font-medium text-3xl py-5">
          {name}
        </h1>
        <ProductBaner fileName={fileName} />
        <div>
          <ButtonList buttons={buttons} />
        </div>

        <h2 className="flex justify-center font-medium text-3xl py-5">
          {name}
        </h2>

        <div className="my-10">{kits && <ProductsList list={kits} />}</div>
        <div className="my-10">
          <DrawingText photo={photo} />
        </div>
        <div className="my-10">
          <Drawing />
        </div>
        <div className="my-10">
          {works && <ServicesCarousel works={works} num={4} />}
        </div>
        <div className="my-10">
          <Advantages />
        </div>
      </div>
    </div>
  );
};

export default DrawingComponent;

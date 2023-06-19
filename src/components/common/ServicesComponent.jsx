import React from "react";
import LinkArrow from "../ui/LinkArrow";
import ProductBaner from "../ui/products/ProductBaner";
import ButtonList from "./ButtonList";
import ProductsList from "../ui/ProductsList";
import Advantages from "../ui/Advantages";
import Services from "../ui/Services";
import { useLocation } from "react-router-dom";

const ServicesComponent = ({ linkName, name, fileName, buttons, kits }) => {
  const { pathname } = useLocation();

  const serviceBlock = pathname.substr(19);

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

        <div className=" my-10">{kits && <ProductsList list={kits} />}</div>
        <div className="my-10">
          <Services block={serviceBlock} />
        </div>
        <div className="my-10">
          <Advantages />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
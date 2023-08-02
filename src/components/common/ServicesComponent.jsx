import React from "react";
import LinkArrow from "../ui/LinkArrow";
import ProductBaner from "../ui/products/ProductBaner";
import ButtonList from "./ButtonList";
import ProductsList from "../ui/ProductsList";
import Advantages from "../ui/Advantages";
import Services from "../ui/Services";
import { useLocation } from "react-router-dom";
import ServiceBlock from "../ui/ServiceBlock";
import PhotoGallery from "./PhotoGallery";
import ServicesCarousel from "../ui/ServicesCarousel";
import FabricInfo from "../ui/FabricInfo";

const ServicesComponent = ({
  linkName,
  name,
  fileName,
  buttons,
  kits,
  info,
  list,
  works,
  fabricInfo,
}) => {
  const { pathname } = useLocation();

  const serviceBlock = pathname.substr(19);

  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <div className="px-5">
        <LinkArrow name={linkName} />
        <h1 className="flex justify-center font-medium text-3xl py-5">
          {name}
        </h1>
        <ProductBaner fileName={fileName} fabricInfo={fabricInfo} />
        <div>
          <ButtonList buttons={buttons} />
        </div>

        <h2 className="flex justify-center font-medium text-3xl py-5">
          {name}
        </h2>

        <div className=" my-10">{kits && <ProductsList list={kits} />}</div>

        <div className="my-10">{info && <ServiceBlock name={linkName} />}</div>
        <div className="my-10">
          <Services block={serviceBlock} />
        </div>
        <div className="my-10">
          {list && (
            <div>
              <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 mb-10">
                НАШИ РАБОТЫ
              </h1>
              <PhotoGallery list={list} />
            </div>
          )}
        </div>
        <div className="my-10">
          {works && <ServicesCarousel works={works} num={4} />}
        </div>
        <div className="my-10">
          {fabricInfo && (
            <div className="mx-48">
              <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 mb-10">
                ВИДЫ ТКАНЕЙ ДЛЯ ШИРОКОФОРМАТНОЙ ПЕЧАТИ
              </h1>
              <FabricInfo fabricInfo={fabricInfo} />
            </div>
          )}
        </div>
        <div className="my-10">
          <Advantages />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;

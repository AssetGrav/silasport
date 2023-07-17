import React from "react";
import LinkArrow from "../LinkArrow";
import PhotoGallery from "../../common/PhotoGallery";
import { ourWorks } from "../../../api/menu/header/ourworks.api";

const worksGallery = () => {
  return (
    <div className="container pt-36">
      <div className="px-5 pb-10">
        <LinkArrow name="Наши работы" />
        <h1 className="flex justify-center font-medium text-3xl py-5">
          {" "}
          Наши работы - Наши клиенты
        </h1>
        <div className="flex flex-col text-xl">
          <PhotoGallery list={ourWorks} />
        </div>
      </div>
    </div>
  );
};

export default worksGallery;

import React from "react";
import LinkArrow from "../LinkArrow";
import { certificates } from "../../../api/certificate.api";

export const Certificate = () => {
  return (
    <div className="container pt-36 pb-10">
      <div className="px-5">
        <div className="flex justify-center flex-col">
          <LinkArrow name="Сертификаты" />
          <h1 className="flex justify-center font-medium text-3xl py-5">
            Сертификаты
          </h1>
        </div>
      </div>
      <img
        alt="certificate"
        className="h-full w-full rounded-lg object-cover object-center p-32"
        src={certificates[0].image}
      />
    </div>
  );
};

export default Certificate;

import React from "react";
import { basketballManKits } from "../../api/menu/total-menu/basketball/basketball-man.api";
import { clothesTshirtPeKits } from "../../api/menu/total-menu/clothes/clothes-tshirt-pe.api";
import { footballManKits } from "../../api/menu/total-menu/football/football-man.api";
import { hockeyTrainingTshirtKits } from "../../api/menu/total-menu/hockey/hockey-training-tshirt.api";
import { kokparKits } from "../../api/menu/total-menu/sporttype/kokpar-catalog.api";
import NewCarouselItems from "../common/NewCarouseItems";

const Models = () => {
  const list = [
    ...basketballManKits,
    ...clothesTshirtPeKits,
    ...footballManKits,
    ...hockeyTrainingTshirtKits,
    ...kokparKits,
  ];
  return (
    <div className="container">
      <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 mb-10">
        МОДЕЛИ
      </h1>
      {/* <ProductsList kit={list} carousel={true} /> */}
      <NewCarouselItems kits={list} num={4} photo={false} carousel={true} />
      {/* <CarouselItems kits={list} num={4} photo={false} carousel={true} /> */}
    </div>
  );
};

export default Models;

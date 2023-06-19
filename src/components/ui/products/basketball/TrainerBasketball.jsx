import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { basketball } from "../../../../api/menu/total-menu/basketball.api";
import { basketballTrainerKits } from "../../../../api/menu/total-menu/basketball/basketball-trainerUndershirt.api";

const TrainerBasketball = () => {
  return (
    <ProductsComponent
      linkName="Тренировочные костюмы"
      name="Тренерский костюм"
      fileName=""
      buttons={basketball.list}
      kits={basketballTrainerKits}
    />
  );
};

export default TrainerBasketball;

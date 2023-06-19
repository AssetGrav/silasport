import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { basketball } from "../../../../api/menu/total-menu/basketball.api";
import { basketballUndershirtKits } from "../../../../api/menu/total-menu/basketball/basketball-undershirt.api";

const UndershirtBasketball = () => {
  return (
    <ProductsComponent
      linkName="Разминочные майки"
      name="Баскетбольные разминочные майки"
      fileName=""
      buttons={basketball.list}
      kits={basketballUndershirtKits}
    />
  );
};

export default UndershirtBasketball;

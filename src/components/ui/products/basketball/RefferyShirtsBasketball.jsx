import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { basketball } from "../../../../api/menu/total-menu/basketball.api";
import { judgeUndershitKits } from "../../../../api/menu/total-menu/basketball/basketball-judgeUndershirt.api";

const RefferyShirtsBasketball = () => {
  return (
    <ProductsComponent
      linkName="Майка судейская"
      name="Баскетбольная майка для судьи"
      fileName=""
      buttons={basketball.list}
      kits={judgeUndershitKits}
    />
  );
};

export default RefferyShirtsBasketball;

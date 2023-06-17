import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { boxKits } from "../../../../api/menu/total-menu/sporttype/box-catalog.api";

const BoxType = () => {
  return (
    <ProductsComponent
      linkName="Бокс"
      name="Пошив боксерской формы, трусов, маек и шорт на заказ"
      fileName=""
      buttons={sportType.list}
      kits={boxKits}
    />
  );
};

export default BoxType;

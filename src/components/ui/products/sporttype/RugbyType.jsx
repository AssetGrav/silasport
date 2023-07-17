import React from "react";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { regbyKits } from "../../../../api/menu/total-menu/sporttype/catalog-regby.api";
import ProductsComponent from "../../../common/ProductsComponent";

const RugbyType = () => {
  return (
    <ProductsComponent
      linkName="Регби"
      name="Магазин регби – форма, одежда, экипировка"
      fileName="banner-american-football.png"
      buttons={sportType.list}
      kits={regbyKits}
    />
  );
};

export default RugbyType;

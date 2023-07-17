import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { motoKits } from "../../../../api/menu/total-menu/sporttype/motosport-catalog.api";

const MotoSportType = () => {
  return (
    <ProductsComponent
      linkName="Мотоспорт"
      name="Одежда для мото – мото майки, мото футболки, мото форма"
      fileName="banner-motosport.png"
      buttons={sportType.list}
      kits={motoKits}
    />
  );
};

export default MotoSportType;

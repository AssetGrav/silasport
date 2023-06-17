import React from "react";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { kiberSportKits } from "../../../../api/menu/total-menu/sporttype/kibersport-catalog.api";
import ProductsComponent from "../../../common/ProductsComponent";

const KiberSportType = () => {
  return (
    <ProductsComponent
      linkName="Киберспорт"
      name="Одежда для киберспорта"
      fileName=""
      buttons={sportType.list}
      kits={kiberSportKits}
    />
  );
};

export default KiberSportType;

import React from "react";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { kokparKits } from "../../../../api/menu/total-menu/sporttype/kokpar-catalog.api";
import ProductsComponent from "../../../common/ProductsComponent";

const KokparType = () => {
  return (
    <ProductsComponent
      linkName="Кокпар"
      name="Одежда для кокпар"
      fileName="kokpar-2.jpg"
      buttons={sportType.list}
      kits={kokparKits}
    />
  );
};

export default KokparType;

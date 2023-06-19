import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { sportType } from "../../../../api/menu/total-menu/sportType.api";
import { athleticKits } from "../../../../api/menu/total-menu/sporttype/athletics-catalog,api";

const AthleticsType = () => {
  return (
    <ProductsComponent
      linkName="Легкая атлетика"
      name="Пошив спортивной одежды и формы для легкой атлетики"
      fileName=""
      buttons={sportType.list}
      kits={athleticKits}
    />
  );
};

export default AthleticsType;

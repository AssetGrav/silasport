import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { volleyball } from "../../../../api/menu/total-menu/volleyball.api";
import { voleyballManKits } from "../../../../api/menu/total-menu/voleyball/voleyball-man-catalog.api";

const ManVoleyball = () => {
  return (
    <ProductsComponent
      linkName="Мужская форма на заказ"
      name="Волейбольная форма на заказ"
      fileName="volleyball-1.jpg"
      buttons={volleyball.list}
      kits={voleyballManKits}
    />
  );
};

export default ManVoleyball;

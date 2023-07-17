import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { football } from "../../../../api/menu/total-menu/football.api";
import { footballManKits } from "../../../../api/menu/total-menu/football/football-man.api";

const ManFootball = () => {
  return (
    <ProductsComponent
      linkName="Форма на заказ"
      name="Футбольная форма на заказ - пошив, изготовление по вашему эскизу (мужская)"
      fileName="banner-football.png"
      buttons={football.list}
      kits={footballManKits}
    />
  );
};

export default ManFootball;

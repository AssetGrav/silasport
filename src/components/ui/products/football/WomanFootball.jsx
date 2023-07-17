import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { football } from "../../../../api/menu/total-menu/football.api";
import { footballWomenKits } from "../../../../api/menu/total-menu/football/football-women.api";

const WomanFootball = () => {
  return (
    <ProductsComponent
      linkName="Форма на заказ"
      name="Футбольная форма на заказ - пошив, изготовление по вашему эскизу (женская)"
      fileName="banner-football.png"
      buttons={football.list}
      kits={footballWomenKits}
    />
  );
};

export default WomanFootball;

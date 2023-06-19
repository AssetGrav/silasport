import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { basketball } from "../../../../api/menu/total-menu/basketball.api";
import { basketballWomenKits } from "../../../../api/menu/total-menu/basketball/basketball-women.api";

const WomanBasketball = () => {
  return (
    <ProductsComponent
      linkName="Женская форма"
      name="Женская баскетбольная форма"
      fileName=""
      buttons={basketball.list}
      kits={basketballWomenKits}
    />
  );
};

export default WomanBasketball;

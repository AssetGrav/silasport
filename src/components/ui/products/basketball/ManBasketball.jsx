import React from "react";
import ProductsComponent from "../../../common/ProductsComponent";
import { basketball } from "../../../../api/menu/total-menu/basketball.api";
import { basketballManKits } from "../../../../api/menu/total-menu/basketball/basketball-man.api";

const ManBasketball = () => {
  return (
    <ProductsComponent
      linkName="Мужская форма"
      name="Пошив баскетбольной формы на заказ"
      fileName=""
      buttons={basketball.list}
      kits={basketballManKits}
    />
  );
};

export default ManBasketball;

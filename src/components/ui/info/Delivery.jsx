import React from "react";
import LinkArrow from "../LinkArrow";
import { info } from "../../../api/menu/header/info.api";
import TableMenu from "../../common/TableMenu";

const Delivery = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Доставка" />
      <div className="flex flex-row px-5 py-10">
        <TableMenu list={info.list} />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">Доставка</h1>
          <p>Мы изготавливаем спортивную одежду на заказ.</p> <br />
        </div>
      </div>
    </div>
  );
};

export default Delivery;

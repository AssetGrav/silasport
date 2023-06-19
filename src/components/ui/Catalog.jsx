import React from "react";
import { basketballManKits } from "../../api/menu/total-menu/basketball/basketball-man.api";
import { hockeyTrainingTshirtKits } from "../../api/menu/total-menu/hockey/hockey-training-tshirt.api";
import { footballManKits } from "../../api/menu/total-menu/football/football-man.api";
import { athleticKits } from "../../api/menu/total-menu/sporttype/athletics-catalog,api";
import { kokparKits } from "../../api/menu/total-menu/sporttype/kokpar-catalog.api";
import { voleyballManKits } from "../../api/menu/total-menu/voleyball/voleyball-man-catalog.api";
import ProductsList from "./ProductsList";

const Catalog = () => {
  const arr = [
    ...hockeyTrainingTshirtKits,
    ...basketballManKits,
    ...footballManKits,
    ...athleticKits,
    ...kokparKits,
    ...voleyballManKits,
  ];
  return (
    <div className="my-10 px-5">
      <ProductsList list={arr} />
    </div>
  );
};

export default Catalog;

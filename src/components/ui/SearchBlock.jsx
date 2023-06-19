import React from "react";
import LinkArrow from "./LinkArrow";
import { useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";

const SearchBlock = () => {
  const { state } = useLocation();
  console.log("state", state.list);
  return (
    <div className="container pt-36 pb-10">
      <div className="flex flex-row px-5">
        <div className="flex flex-col">
          <LinkArrow name="Поиск" />
          <div className="flex justify-left py-20">
            <ProductsList list={state.list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;

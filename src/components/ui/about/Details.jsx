import React from "react";
import TableMenu from "./../../common/TableMenu";
import { about } from "../../../api/menu/header/about.api";
import LinkArrow from "../LinkArrow";

const Details = () => {
  return (
    <div className="container pt-36 pb-10">
      <div className="px-5">
        <LinkArrow name="Реквизиты компании" />
        <div className="flex flex-row px-5 py-10">
          <TableMenu list={about.list} />
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl py-5"> Реквизиты</h1>
            <div className="text-dark-blue hover:text-blue">
              <a href="/img/details.doc" download>
                <div className="flex flex-row">
                  <img
                    src="/img/assets/img/doc.png"
                    className="w-10 h-10"
                    alt=""
                  />

                  <button className="px-3">
                    Реквизиты ТОО "SilaSport" (42,5 Kb)
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import VacancyItem from "../../common/VacancyItem";
import { vacancies } from "./../../../api/menu/header/vacancy/vacancies.api";
import TableMenu from "./../../common/TableMenu";
import { about } from "../../../api/menu/header/about.api";
import LinkArrow from "../LinkArrow";

const Vacancies = () => {
  return (
    <div className="container pt-36 pb-10">
      <div className="px-5">
        <LinkArrow name="Вакансии компании SilaSport" />
        <div className="flex flex-row px-5 py-10">
          <TableMenu list={about.list} />
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl pb-5">
              Компании сила спорт требуются на работу
            </h1>
            {vacancies.map((elem) => (
              <div key={elem._id}>
                <VacancyItem props={elem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;

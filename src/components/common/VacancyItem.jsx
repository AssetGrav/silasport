import React from "react";

const VacancyItem = ({ props }) => {
  return (
    <div className="flex flex-col justify-start m-5">
      <h2 className="font-medium text-xl">Графический дизайнер</h2>
      <div className="font-bold py-5">Требования:</div>

      <ul className="list-inside list-disc px-5">
        {props.requirements.map((elem) => (
          <li className="elem._id">{elem.text + ";"}</li>
        ))}
      </ul>
      <div className="font-bold py-5">Обязанности:</div>
      <ul className="list-inside list-disc px-5">
        {props.duties.map((elem) => (
          <li key="elem._id">{elem.text + ";"}</li>
        ))}
      </ul>
      <div className="py-5">
        З/п по результатам собеседования. Резюме высылайте пожалуйста на e-mail:{" "}
        <a href="#" className="text-dark-blue hover:text-blue">
          417051@mail.ru
        </a>
      </div>
    </div>
  );
};

export default VacancyItem;

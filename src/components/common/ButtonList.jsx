import React from "react";
import Button from "./Button";

const ButtonList = ({ buttons }) => {
  return (
    <div className="inline-flex flex-wrap rounded-md " role="group">
      {buttons.map((elem) => (
        <div key={elem.name} className="m-2">
          <Button text={elem.name} host={elem.host} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;

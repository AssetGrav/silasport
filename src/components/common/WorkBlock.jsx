import React from "react";

const WorkBlock = ({ work, number }) => {
  return (
    <div className="flex flex-col mx-5 overflow-hidden border-2mx-1 text-gray hover:text-blue">
      <div className="flex justify-center">
        <img
          className={` ${number}`}
          src={Array.isArray(work.image) === false ? work.image : work.image[0]}
          alt="#"
        />
      </div>
      <div className="px-6 my-4">
        <p className="flex justify-center text-base">
          {work.name ? work.name : ""}
        </p>
      </div>
    </div>
  );
};

export default WorkBlock;

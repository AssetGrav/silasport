import React from "react";

const WorkBlock = ({ work }) => {
  return (
    <div className="mx-5 overflow-hidden shadow-lg border-2mx-1 text-gray hover:text-blue">
      <img className="w-full h-72 min-h-full" src={work.image} alt="" />
      <div className="px-6 py-4">
        <p className="flex justify-center text-base ">{work.name}</p>
      </div>
    </div>
  );
};

export default WorkBlock;

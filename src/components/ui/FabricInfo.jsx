import React from "react";

const FabricInfo = ({ fabricInfo }) => {
  return (
    <div className="flex flex-col">
      {fabricInfo.map((elem) => (
        <div key={elem.name} className="flex flex-col my-5 pt-5 w-full">
          <p className="text-lg mx-5 ">{elem.name}</p>
          <div className="flex flex-wrap">
            {elem.type.map((e) => (
              <div
                key={e.name}
                className="flex w-1/2 md:w-1/4 my-2 flex-wrap pt-2"
              >
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block rounded-lg object-cover object-center w-full xl:h-56 h-44"
                    src={e.image}
                  />
                  <p className="flex justify-center my-2">{e.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FabricInfo;

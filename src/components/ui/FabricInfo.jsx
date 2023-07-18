import React from "react";

const FabricInfo = ({ fabricInfo }) => {
  return (
    <div className="flex flex-col">
      {fabricInfo.map((elem) => (
        <div key={elem.name} className="flex flex-col my-2 pt-2">
          <p className="text-lg mx-5">{elem.name}</p>
          <div className="flex flex-wrap">
            {elem.type.map((e) => (
              <div key={e.name} className="flex w-1/4 flex-wrap pt-2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block rounded-lg object-cover object-center w-72 h-56"
                    src={e.image}
                  />
                  <p className="flex justify-center">{e.name}</p>
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

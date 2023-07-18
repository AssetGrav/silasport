import React from "react";
import { ourClients } from "../../api/clients.api";
import CarouselComponent from "../common/CarouselComponent";

const OurClients = () => {
  return (
    <div className="px-5">
      <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 mb-10">
        НАШИ КЛИЕНТЫ
      </h1>
      <CarouselComponent works={ourClients} number="w-32 h-32" num={6} />
      {/* <Carousel responsive={responsive} className="my-10">
        {ourClients.map((elem) => (
          <div
            key={elem._id}
            className="flex justify-center mx-5 overflow-hidden border-2mx-1 text-gray hover:text-blue"
          >
            <img className="w-36 h-36" src={elem.image} alt="" />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default OurClients;

import React from "react";
import Carousel from "react-multi-carousel";
import { ourClients } from "../../api/clients.api";

const OurClients = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-5">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        НАШИ КЛИЕНТЫ
      </h1>
      <Carousel responsive={responsive} className="my-10">
        {ourClients.map((elem) => (
          <div
            key={elem._id}
            className="flex justify-center mx-5 overflow-hidden border-2mx-1 text-gray hover:text-blue"
          >
            <img className="w-36 h-36" src="/img/logo.png" alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OurClients;

import React from "react";
import { useKits } from "../hook/useKits";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WorkBlock from "./WorkBlock";

const OurWorks = () => {
  const { works } = useKits();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  console.log("works", works);
  return (
    <div className="px-5">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        НАШИ РАБОТЫ
      </h1>
      <Carousel responsive={responsive}>
        {works.map((elem) => (
          <div key={elem._id}>
            <WorkBlock work={elem} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OurWorks;

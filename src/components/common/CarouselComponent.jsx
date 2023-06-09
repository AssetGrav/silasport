import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WorkBlock from "./WorkBlock";

const CarouselComponent = ({ works, number, num }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: num,
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
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        infinite={true}
      >
        {works.map((elem) => (
          <div key={elem._id}>
            <WorkBlock work={elem} number={number} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

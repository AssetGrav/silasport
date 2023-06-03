import React from "react";
import { useKits } from "../hook/useKits";
import CarouselBlock from "./CarouselBlock";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselItems = () => {
  const { kits } = useKits();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        МОДЕЛИ
      </h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mx-5"
      >
        {kits.map((elem) => (
          <div key={elem._id}>
            <CarouselBlock kit={elem} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItems;

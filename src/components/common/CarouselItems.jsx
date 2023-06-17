import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBlock from "./CarouselBlock";

const CarouselItems = ({ kits, num, carousel, photo, handleClick }) => {
  console.log("kits", kits);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: num,
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
    <>
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
          <div key={elem._id} onChange={handleClick}>
            <CarouselBlock
              kit={elem}
              carousel={carousel}
              photo={photo}
              products={kits}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselItems;

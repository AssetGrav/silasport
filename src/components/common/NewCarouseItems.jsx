import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBlock from "./CarouselBlock";
import { totalSport } from "../../api/sportAllTypes.api";
import { Link, useLocation } from "react-router-dom";

const NewCarouselItems = ({ kits, num, carousel, photo, handleClick }) => {
  const { state } = useLocation();

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

  const findHost = (type) => {
    const findedHost = totalSport.find((elem) => {
      return elem._id === type && elem;
    });
    return findedHost.host;
  };
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
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
          <div key={elem._id} onClick={handleClick} className="mx-2">
            <Link
              to={
                state
                  ? `/products/${state.some + "/" + elem._id}`
                  : `/products/${findHost(elem.type) + "/" + elem._id}`
              }
              state={{ some: elem }}
            >
              <CarouselBlock
                kit={elem}
                carousel={carousel}
                photo={photo}
                products={kits}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default NewCarouselItems;

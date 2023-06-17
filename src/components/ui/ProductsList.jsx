import React from "react";
import CarouselBlock from "../common/CarouselBlock";
import { Link, useLocation } from "react-router-dom";

const ProductsList = ({ list }) => {
  const { state } = useLocation();
  console.log("state", state);
  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {list.map((elem) => (
        <div key={elem._id}>
          <Link
            to={`/products/${state.some + "/" + elem._id}`}
            state={{ some: elem }}
          >
            <CarouselBlock kit={elem} carousel={true} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

import React from "react";
import CarouselBlock from "../common/CarouselBlock";
import { Link } from "react-router-dom";
import { totalSport } from "../../api/sportAllTypes.api";

const ProductsList = ({ list, state }) => {
  const findHost = (type) => {
    const findedHost = totalSport.find((elem) => {
      return elem._id === type && elem;
    });
    return findedHost.host;
  };

  return (
    <div className="grid grid-cols-4 gap-4 content-start">
      {list.map((elem) => (
        <div key={elem._id}>
          <Link
            to={
              state
                ? `/products/${state.some + "/" + elem._id}`
                : `/products/${findHost(elem.type) + "/" + elem._id}`
            }
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

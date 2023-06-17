import React from "react";
import PhoneForm from "./PhoneForm";
import ServiceInfo from "./menu-service/ServiceInfo";
import { serviceProducts } from "../../api/services-info.api";

const Services = ({ block }) => {
  const info = serviceProducts.find((elem) => {
    return elem.name === block && elem;
  });
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <div className="w-1/3 ">
          <PhoneForm />
        </div>
      </div>
      {info !== undefined ? <ServiceInfo info={info} /> : ""}
    </div>
  );
};

export default Services;

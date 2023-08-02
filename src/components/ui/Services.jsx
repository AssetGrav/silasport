import React from "react";
import ServiceInfo from "./menu-service/ServiceInfo";
import { serviceProducts } from "../../api/services-info.api";
import ContactUs from "./ContactUs";

const Services = ({ block }) => {
  const info = serviceProducts.find((elem) => {
    return elem.name === block && elem;
  });
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <ContactUs />
        </div>
      </div>
      {info !== undefined ? <ServiceInfo info={info} /> : ""}
    </div>
  );
};

export default Services;

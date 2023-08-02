import React from "react";
import ItemsContainer from "./footer/ItemsContainer";
import SocialIcons from "./footer/SocialIcons";
import { Icons, LOCATION } from "../../api/footer.api";
import Item from "./footer/Item";

const Footer = () => {
  return (
    <footer className="w-full bg-blue text-white mt-10">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="w-full lg:w-3/4 px-10">
            <ItemsContainer />
          </div>
          <div className="px-5 py-16 hidden lg:flex md:w-1/4 ">
            <Item Links={LOCATION} title="Головной офис Астана" />
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2023 Appy. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

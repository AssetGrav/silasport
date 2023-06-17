import React from "react";

const Social = () => {
  return (
    <div className="flex justify-between pb-1">
      <a href="https://api.whatsapp.com/send/?phone=%2B77714171888&text&type=phone_number&app_absent=0">
        <img
          src="/img/whatsapp.png"
          className="block w-8 h-8 rounded-sm mr-2"
          alt=""
        />
      </a>
      <a href="#">
        <img
          src="/img/instagram.png"
          className="block w-8 h-8 rounded-sm mr-2"
          alt=""
        />
      </a>
      <a href="#">
        <img
          src="/img/telegram.png"
          className="block w-8 h-8 rounded-sm mr-2"
          alt=""
        />
      </a>
    </div>
  );
};

export default Social;

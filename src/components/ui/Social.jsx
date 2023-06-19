import React from "react";

const Social = () => {
  return (
    <div className="flex justify-between pb-1">
      <a
        href="https://api.whatsapp.com/send/?phone=%2B77714171888&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <div className="block w-8 h-8 rounded-lg mr-2 hover:bg-white">
          <div
            className="w-full h-full bg-whatsapp bg-contain bg-no-repeat hover:bg-whatsapp-white"
            alt=""
          />
        </div>
      </a>
      <a
        href="https://instagram.com/silasport_astana?igshid=NTc4MTIwNjQ2YQ=="
        target="_blank"
        rel="noreferrer"
      >
        <div className="block w-8 h-8 rounded-lg mr-2 hover:bg-white">
          <div
            className="w-full h-full bg-instagram bg-contain bg-no-repeat hover:bg-instagram-white"
            alt=""
          />
        </div>
      </a>
      <a href="http://t.me/silasport76" target="_blank" rel="noreferrer">
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

import React, { useState } from "react";

const PhoneForm = ({ type }) => {
  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <div className="mb-3">
      <form className="m-4 p-10 flex flex-col w-full items-stretch bg-gray-light">
        <label className="flex justify-center my-2 font-bold text-xl">
          Напишите номер телефона мы Вам перезвоним
        </label>
        <input
          name="phone"
          type="text"
          className="flex w-full min-w-0 flex-auto rounded-l  bg-transparent  p-2 text-base font-normal text-dark-blue  hover:border-blue   dark:placeholder:text-dark-blue dark:focus:border-blue my-2"
          placeholder="+77751234567"
          value={message.phone}
          onChange={handleChange}
        />

        <button
          className="flex justify-center my-2 z-[2] items-center rounded-r bg-dark-blue px-auto py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default PhoneForm;

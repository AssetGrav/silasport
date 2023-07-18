import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import process from "process";

const ContactUs = () => {
  const form = useRef();
  const [data, setData] = useState("");
  const [error, setError] = useState();

  const handleChange = ({ target }) => {
    setData(target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        "aFNhwjSZ8u3Y_VWcr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
          setError(error);
        }
      );
    setData("");
    form.current[0].value = "";
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="m-4 p-10 flex flex-col w-full items-stretch bg-gray-light"
    >
      <label className="flex justify-center my-2 font-bold text-xl">
        Напишите номер телефона мы Вам перезвоним
      </label>
      <input
        name="message"
        className="flex w-full min-w-0 flex-auto rounded-l  bg-transparent  p-2 text-base font-normal text-dark-blue  hover:border-blue dark:placeholder:text-dark-blue dark:focus:border-blue my-2"
        placeholder="7751234567 Алина"
        type="text"
        value={data.message}
        onChange={handleChange}
      />
      <div className="py-2">{error}</div>
      <input
        type="submit"
        value="отправить"
        className="flex justify-center my-2 z-[2] items-center rounded-r bg-dark-blue px-auto py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      />
    </form>
  );
};

export default ContactUs;

import React from "react";

export default function Modal({ onClickModal, image }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        {/*footer*/}

        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <img src={image} alt="" className="w-full h-full" />
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
            type="button"
            onClick={onClickModal}
          >
            Close
          </button>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

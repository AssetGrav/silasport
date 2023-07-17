import React from "react";

const CarouselBlock = ({ kit, carousel, photo }) => {
  // const [showModal, setShowModal] = useState(false);
  // const handleModal = () => {
  //   if (showModal === false) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };

  return (
    <>
      {!photo ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-blue mx-1 ">
          <img
            className="w-full h-96 object-contain min-h-full"
            src={carousel === false ? kit.image : kit.image[0]}
            alt="#"
          />

          <div className="px-6 py-4">
            <p className="flex justify-center h-10 text-gray-700 text-base">
              {kit.name}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="flex justify-center rounded-full px-3 py-1 text-sm font-semibold text-blue mr-2 mb-2">
              {"от " + kit.price + " тг"}
            </span>
          </div>
          <button className="flex justify-center w-full h-full rounded-none bg-blue hover:bg-red py-2 text-center text-white">
            Подробнее
          </button>
        </div>
      ) : (
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-dark-blue mx-auto ">
            <img className="w-full h-96 min-h-full" src={kit.image} alt="" />
          </div>
          {/* {showModal ? (
            <Modal onClickModal={handleModal} kit={kit.image} />
          ) : null} */}
        </div>
      )}
    </>
  );
};

export default CarouselBlock;

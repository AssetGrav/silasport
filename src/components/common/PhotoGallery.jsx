import React from "react";

const PhotoGallery = ({ list }) => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {list.map((elem) => (
          <div key={elem._id} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={elem.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

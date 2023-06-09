import React from "react";

const PhotoGallery = ({ list }) => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        {list.map((elem) => (
          <div key={elem._id} class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={elem.host}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

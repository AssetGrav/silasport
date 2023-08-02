import React from "react";
import { videoFile } from "../../api/video.api";
import Video from "../common/Video";

const VideoGallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-row justify-center md:-m-2">
        {videoFile.map((elem, index) => (
          <div
            key={elem._id}
            className={`flex justify-center md:w-[250px] md:h-[150px] lg:w-[420px] lg:h-[300px] ${
              index !== 0 ? "hidden" : "flex"
            } sm:${index === 2 ? "hidden" : "flex"} md:flex`}
          >
            <div className="w-full p-1 ">
              <Video videoId={elem._id} height="100%" width="100%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

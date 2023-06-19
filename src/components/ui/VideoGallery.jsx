import React from "react";
import { videoFile } from "../../api/video.api";
import Video from "../common/Video";

const VideoGallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {videoFile.map((elem) => (
          <div key={elem._id} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Video videoId={elem._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

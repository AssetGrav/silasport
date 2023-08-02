import React from "react";
import LinkArrow from "./LinkArrow";
import VideoGallery from "./VideoGallery";

const VideoAboutUs = () => {
  return (
    <div className="container pt-36">
      <div className="px-20 my-50">
        <LinkArrow name="Галерея работ" />
      </div>
      <div className="flex justify-center">
        <h1 className="font-medium text-2xl py-5"> ВИДЕО О НАС</h1>
      </div>

      <VideoGallery />
    </div>
  );
};

export default VideoAboutUs;

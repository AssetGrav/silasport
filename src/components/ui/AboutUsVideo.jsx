import React from "react";
import Video from "./Video";
import { videoFile } from "../../api/video.api";
import Button from "../common/Button";

const AboutUsVideo = () => {
  return (
    <div className="px-5">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        ВИДЕО О НАС
      </h1>
      <div className="my-5 flex flex-row">
        {videoFile.map((elem) => (
          <div key={elem._id}>
            <Video videoId={elem._id} height={250} width={420} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="СМОТРЕТЬ ВСЕ ВИДЕО" />
      </div>
    </div>
  );
};

export default AboutUsVideo;

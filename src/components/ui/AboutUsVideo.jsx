import React from "react";
import { videoFile } from "../../api/video.api";
import Video from "../common/Video";
import { Link } from "react-router-dom";
// на главной странице
const AboutUsVideo = () => {
  return (
    <div className="px-10">
      <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 ">
        ВИДЕО О НАС
      </h1>
      <div className="my-5 flex flex-row justify-center">
        {videoFile.map((elem, index) => (
          <div
            key={elem._id}
            className={`flex justify-center  md:w-[250px] md:h-[150px] lg:w-[420px] lg:h-[300px] ${
              index !== 0 ? "hidden" : "flex"
            } sm:${index === 2 ? "hidden" : "flex"} lg:flex`}
          >
            <Video videoId={elem._id} height={"100%"} width={"100%"} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/video">
          <button className="max-h-10 text-justify bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-2  border border-blue hover:border-red rounded">
            СМОТРЕТЬ ВСЕ ВИДЕО
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsVideo;

import React from "react";
import YouTube from "react-youtube";

class Video extends React.Component {
  render() {
    const opts = {
      height: "290",
      width: "540",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div className="flex items-center m-10">
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;

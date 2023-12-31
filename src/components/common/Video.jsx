import React from "react";
import YouTube from "react-youtube";

class Video extends React.Component {
  render() {
    const opts = {
      height: this.props.height,
      width: this.props.width,
      // playerVars: {
      //   // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
      // },
    };

    return (
      <div className="flex items-center mx-2">
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;

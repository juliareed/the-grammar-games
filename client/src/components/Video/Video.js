import React from 'react';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import "./video.css"

class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div>
      <YouTube className = "youtubevid"
        videoId={this.props.match.params.vidId}
        opts={opts}
        onReady={this._onReady}
      />
      <Link to="/third/sentence/:vidId/data"><button className="btn">Take the Quiz!</button></Link>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

export default Video;
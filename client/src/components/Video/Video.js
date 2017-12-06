import React from 'react';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import "./video.css"



class Video extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      urlId: ""
    }
}

componentDidMount() {
if (window.location.pathname === "/third/sentence/B9bJaoIHRp4") {
  this.setState({urlId: "/third/sentence/B9bJaoIHRp4/data"})
} else if (window.location.pathname === "/third/nouns/bGz1acC3Wew") {
  this.setState({urlId: "/third/nouns/bGz1acC3Wew/data2"})
} else if (window.location.pathname === "/third/pronouns/Gf7UgGyvDCA") {
  this.setState({urlId: "/third/pronouns/Gf7UgGyvDCA/data3"})
} else if (window.location.pathname === "/fourth/phrases/7dOBMUESkqk") {
  this.setState({urlId: "/fourth/phrases/7dOBMUESkqk/data4"})
} else if (window.location.pathname === "/fourth/conjunctions/imwtcmvk668") {
  this.setState({urlId: "/fourth/conjunctions/imwtcmvk668/data5"})
} else if (window.location.pathname === "/fourth/relativepronouns/ZHzKQkX3IxI") {
  this.setState({urlId: "/fourth/relativepronouns/ZHzKQkX3IxI/data6"})
} else if (window.location.pathname === "/fifth/punctuating/DBMQOK64VQY") {
  this.setState({urlId: "/fifth/punctuating/DBMQOK64VQY/data7"}) 
} else if (window.location.pathname === "/fifth/correlativeconjunctions/R74Ly00UygU") {
  this.setState({urlId: "/fifth/correlativeconjunctions/R74Ly00UygU/data8"}) 
} else if (window.location.pathname === "/fifth/introverbtense/faUvT7zfsyk") {
  this.setState({urlId: "/fifth/introverbtense/faUvT7zfsyk/data9"}) 
} else if (window.location.pathname === "/sixth/possessivepronouns/bhzh8VDykc4") {
  this.setState({urlId: "/sixth/possessivepronouns/bhzh8VDykc4/data10"}) 
} else if (window.location.pathname === "/sixth/reflexivepronouns/Zoh8XpfcF-c") {
  this.setState({urlId: "/sixth/reflexivepronouns/Zoh8XpfcF-c/data11"}) 
} else if (window.location.pathname === "/sixth/perfectverbs/858npSa0rgc") {
  this.setState({urlId: "/sixth/perfectverbs/858npSa0rgc/data12"}) 
}
}

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
      <div className='button'>
      <Link to={this.state.urlId}><button className="btn">Take the Quiz!</button></Link>
      <br />
      </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

export default Video;
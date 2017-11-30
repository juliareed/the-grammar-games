import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
import Video from "./Video/Video"
import Footer from "./Footer/Footer"
// import Quiz from "./Quiz/Quiz"
import "./main.css"

class Main extends Component {
  
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
          <br/>
          <Video />
          <br/>
          <hr />
          <Footer />
          </div>
        </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Main;
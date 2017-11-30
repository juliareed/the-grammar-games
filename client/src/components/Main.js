import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Navbar from "./Navbar/Navbar"
import Video from "./Video/Video"
import Footer from "./Footer/Footer"
import Answers from "./Answers/Answers"
import Popup from "./Popup/Popup"
import Quiz from "./Quiz/Quiz"
import data from '../data/data';
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
          <Quiz />
          <hr />
          <Footer />
          </div>
        </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Main;
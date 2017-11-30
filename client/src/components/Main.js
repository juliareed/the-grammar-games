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
        <div>
        <div className="main-container">
          <div className="container">
          <Navbar />
          <br/>
          <p>
            <button className="btn btn-primary btn-lg">3rd Grade</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">4th Grade</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">5th Grade</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">6th Grade</button>
          </p>
          <Video />
          <br/>
          <Quiz />
          <hr />
          <Footer />
          </div>
        </div>
       </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Main;
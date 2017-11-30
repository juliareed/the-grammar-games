import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
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
          <p>
            <a href="#/quiz_add" className="btn btn-primary btn-lg">3rd Grade</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#/quiz_play" className="btn btn-primary btn-lg">4th Grade</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#/quiz_add" className="btn btn-primary btn-lg">5th Grade</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#/quiz_add" className="btn btn-primary btn-lg">6th Grade</a>
          </p>
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
import React, { Component } from 'react';
// import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Navbar from "../Navbar/Navbar"
// import Video from "./Video/Video"
import Footer from "../Footer/Footer"
// import Answers from "./Answers/Answers"
// import Popup from "./Popup/Popup"
// import Quiz from "./Quiz/Quiz"
// import data from '../data/data'
// import Third from "./Grade/Third.js"
// import Fourth from "./Grade/Fourth.js"
// import Fifth from "./Grade/Fifth.js"
// import Sixth from "./Grade/Sixth.js"
// import Quiz from "./Quiz/Quiz"
import "../Main/main.css"

class Fifth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
          <br/>
          <p>
            <button className="btn btn-primary btn-lg">Punctuating a list</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">Correlative conjunctions</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">Intro to verb tense</button>&nbsp;&nbsp;&nbsp;&nbsp;
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
  export default Fifth;
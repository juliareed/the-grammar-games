import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Video from "./Video/Video"
import Footer from "./Footer/Footer"
import Third from "./Grade/Third.js"
import Fourth from "./Grade/Fourth.js"
import Fifth from "./Grade/Fifth.js"
import Sixth from "./Grade/Sixth.js"
// import Quiz from "./Quiz/Quiz"
import "./main.css"

class Main extends Component {
  
    render() {
  
      return (
        <div>
          <div>
            <Router>
               <div>
                  <Route path="/Third" component={Third} />
                  <Route path="/Fourth" component={Fourth} />
                  <Route path="/Fifth" component={Fifth} />
                  <Route path="/Sixth" component={Sixth} />
              </div>
            </Router>

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
          <hr />
          <Footer />
          </div>
        </div>
       </div>
       </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Main;
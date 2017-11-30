import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
// import Quiz from "./Quiz/Quiz"
import "../main.css"
// import Main from "../Main"

class Fourth extends Component {
  
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
          <br/>
          <p>
            <button className="btn btn-primary btn-lg">Three ways to end a sentence</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">Common and proper nouns</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">Personal pronouns</button>
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
  export default Fourth;
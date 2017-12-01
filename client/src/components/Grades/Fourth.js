import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./grade.css"

class Fourth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          <Link to="/fourth/phrases"><button className="btn btn-primary btn-md">Prepositional Phrases</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fourth/conjunctions"><button className="btn btn-primary btn-md">Coordinating Conjunctions</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fourth/relativepronouns"><button className="btn btn-primary btn-md">Relative Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <br/>
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Fourth;
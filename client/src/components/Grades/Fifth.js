import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./grade.css"

class Fifth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          <Link to="/fifth/punctuating"><button className="btn btn-primary btn-md">Punctuating A List</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fifth/correlativeconjunctions"><button className="btn btn-primary btn-md">Correlative Conjunctions</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fifth/introverbtense"><button className="btn btn-primary btn-md">Introduction to Verb Tense</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <br/>
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Fifth;
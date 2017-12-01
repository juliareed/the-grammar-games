import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./grade.css"

class Sixth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
           {  (window.location.pathname == "/sixth/possessivepronouns" || window.location.pathname == "/sixth/reflexivepronouns" || window.location.pathname == "/sixth/perfectverbs") ? "" :
            <div>
              <Link to="/sixth/possessivepronouns"><button className="btn btn-primary btn-md">Punctuating A List</button></Link>
              <Link to="/sixth/reflexivepronouns"><button className="btn btn-primary btn-md">Correlative Conjunctions</button></Link>
              <Link to="/sixth/perfectverbs"><button className="btn btn-primary btn-md">Introduction to Verb Tense</button></Link>
            </div>
          }
          </p>
          <br/>
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Sixth;
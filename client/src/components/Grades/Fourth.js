import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./grade.css"

class Fourth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          {  (window.location.pathname == "/fourth/phrases" || window.location.pathname == "/fourth/conjunctions" || window.location.pathname == "/fourth/relativepronouns") ? "" :
            <div>
              <Link to="/fifth/punctuating"><button className="btn btn-primary btn-md">Punctuating A List</button></Link>
              <Link to="/fourth/conjunctions"><button className="btn btn-primary btn-md">Correlative Conjunctions</button></Link>
              <Link to="/fourth/relativepronouns"><button className="btn btn-primary btn-md">Introduction to Verb Tense</button></Link>
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
  export default Fourth;
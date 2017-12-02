import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./grade.css";

class Fourth extends Component {
    
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          {  (window.location.pathname === "/fourth/phrases" || window.location.pathname === "/fourth/conjunctions" || window.location.pathname === "/fourth/relativepronouns") ? "" :
            <div>
              <Link to="/fourth/phrases/7dOBMUESkqk"><button className="btn btn-primary btn-md">Prepositional Phrases</button></Link>
              <Link to="/fourth/conjunctions/imwtcmvk668"><button className="btn btn-primary btn-md">Coordinating Conjunctions</button></Link>
              <Link to="/fourth/relativepronouns/ZHzKQkX3IxI"><button className="btn btn-primary btn-md">Relative Pronouns</button></Link>
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
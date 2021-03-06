import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import "./grade.css";

class Fourth extends Component {
    
    render() {
  
      return (
          <p>
            <Navbar />
          {  (window.location.pathname === "/fourth/phrases" || window.location.pathname === "/fourth/conjunctions" || window.location.pathname === "/fourth/relativepronouns") ? "" :
            <div>
              <Link to="/fourth/phrases/7dOBMUESkqk"><button className="btn">Prepositional Phrases</button></Link>
              <Link to="/fourth/conjunctions/imwtcmvk668"><button className="btn">Coordinating Conjunctions</button></Link>
              <Link to="/fourth/relativepronouns/ZHzKQkX3IxI"><button className="btn">Relative Pronouns</button></Link>
            </div>
          }
          </p>
      );
    }
  };
  
  // Export the module back to the route
  export default Fourth;
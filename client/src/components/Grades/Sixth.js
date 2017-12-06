import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import "./grade.css";

class Sixth extends Component {
     
    render() {
  
      return (
          <p>
            <Navbar />
           {  (window.location.pathname === "/sixth/possessivepronouns" || window.location.pathname === "/sixth/reflexivepronouns" || window.location.pathname === "/sixth/perfectverbs") ? "" :
            <div>
              <Link to="/sixth/possessivepronouns/bhzh8VDykc4"><button className="btn">Possesive Pronouns</button></Link>
              <Link to="/sixth/reflexivepronouns/Zoh8XpfcF-c"><button className="btn">Reflexive Pronouns</button></Link>
              <Link to="/sixth/perfectverbs/858npSa0rgc"><button className="btn">The Perfect Aspect of Verbs</button></Link>
            </div>
          }
          </p>
      );
    }
  };
  
  // Export the module back to the route
  export default Sixth;
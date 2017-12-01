import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Sixth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          <Link to="/sixth/possessivepronouns"><button className="btn btn-primary btn-lg">Possessive Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/sixth/reflexivepronouns"><button className="btn btn-primary btn-lg">Reflexive Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/sixth/perfectverbs"><button className="btn btn-primary btn-lg">The Perfect Aspect of Verbs</button></Link>
          </p>
          <br/>
          <hr />
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Sixth;
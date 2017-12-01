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
          <Link to="/sixth/possessivepronouns"><button className="btn btn-primary btn-md">Possessive Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/sixth/reflexivepronouns"><button className="btn btn-primary btn-md">Reflexive Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/sixth/perfectverbs"><button className="btn btn-primary btn-md">The Perfect Aspect of Verbs</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <br/>
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Sixth;
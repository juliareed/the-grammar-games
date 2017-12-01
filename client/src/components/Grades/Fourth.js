import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Fourth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          <Link to="/fourth/phrases"><button className="btn btn-primary btn-lg">Prepositional Phrases</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fourth/conjunctions"><button className="btn btn-primary btn-lg">Coordinating Conjunctions</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fourth/relativepronouns"><button className="btn btn-primary btn-lg">Relative Pronouns</button></Link>
          </p>
          <br/>
          <hr />
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Fourth;
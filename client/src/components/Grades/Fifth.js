import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Fifth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          <Link to="/fifth/punctuating"><button className="btn btn-primary btn-lg">Punctuating A List</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fifth/correlativeconjunctions"><button className="btn btn-primary btn-lg">Correlative Conjunctions</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/fifth/introverbtense"><button className="btn btn-primary btn-lg">Introduction to Verb Tense</button></Link>
          </p>
          <br/>
          <hr />
          </div>
        </div>
       
       
      );
    }
  };
  
  // Export the module back to the route
  export default Fifth;
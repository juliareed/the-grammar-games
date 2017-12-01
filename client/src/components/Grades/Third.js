import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Third extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
            <Link to="/third/sentence"><button className="btn btn-primary btn-lg">Three Ways to End a Sentence</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third/nouns"><button className="btn btn-primary btn-lg">Common and Proper Nouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third/pronouns"><button className="btn btn-primary btn-lg">Personal Pronouns</button></Link>
          </p>
          <br/>
          <hr />
          </div>
        </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Third;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./grade.css"

class Third extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
            <Link to="/third/sentence"><button className="btn btn-primary btn-md">Three Ways to End a Sentence</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third/nouns"><button className="btn btn-primary btn-md">Common and Proper Nouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third/pronouns"><button className="btn btn-primary btn-md">Personal Pronouns</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <br/>
          </div>
        </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Third;
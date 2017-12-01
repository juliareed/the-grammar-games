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

          {  (window.location.pathname == "/third/sentence" || window.location.pathname == "/third/nouns" || window.location.pathname == "/third/pronouns") ? "" :
            <div>
              <Link to="/third/sentence"><button className="btn btn-primary btn-md">Punctuating A List</button></Link>
              <Link to="/third/nouns"><button className="btn btn-primary btn-md">Correlative Conjunctions</button></Link>
              <Link to="/third/pronouns"><button className="btn btn-primary btn-md">Introduction to Verb Tense</button></Link>
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
  export default Third;
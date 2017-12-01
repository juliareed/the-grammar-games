import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./grade.css"

class Fifth extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <br/>
          <p>
          {  (window.location.pathname == "/fifth/punctuating" || window.location.pathname == "/fifth/correlativeconjunctions" || window.location.pathname == "/fifth/introverbtense") ? "" :
            <div>
              <Link to="/fifth/punctuating"><button className="btn btn-primary btn-md">Punctuating A List</button></Link>
              <Link to="/fifth/correlativeconjunctions"><button className="btn btn-primary btn-md">Correlative Conjunctions</button></Link>
              <Link to="/fifth/introverbtense"><button className="btn btn-primary btn-md">Introduction to Verb Tense</button></Link>
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
  export default Fifth;
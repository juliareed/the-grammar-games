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
              <Link to={"/third/sentence/B9bJaoIHRp4"} ><button className="btn btn-primary btn-md">Three Ways to End a Sentence</button></Link>
              <Link to="/third/nouns/bGz1acC3Wew"><button className="btn btn-primary btn-md">Common and Proper Nouns </button></Link>
              <Link to="/third/pronouns/Gf7UgGyvDCA"><button className="btn btn-primary btn-md">Personal Pronouns </button></Link>
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
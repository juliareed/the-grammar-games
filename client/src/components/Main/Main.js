import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Quiz from '../Quiz.js';

import "./main.css"

class Main extends Component {
     
    render() {
  
      return (
        <div>
          <Navbar />
          <br/>
          <p>
            <div>
               <Link to="/third"><button className="btn">3rd Grade</button></Link>
               <Link to="/fourth"><button className="btn">4th Grade</button></Link>
               <Link to="/fifth"><button className="btn">5th Grade</button></Link>
               <Link to="/sixth"><button className="btn">6th Grade</button></Link>
              </div>
          </p>
          <br/>
          </div>
       
       
      );
    }
  };

export default Main;
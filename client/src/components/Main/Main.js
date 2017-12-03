import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Quiz from '../Quiz.js';

import "./main.css"

class Main extends Component {
     
    render() {
  
      return (
        <div>
          <Navbar />
          <br/>
          <Quiz />
          <p>
            {  (window.location.pathname === "/third" || window.location.pathname === "/fourth" || window.location.pathname === "/fifth" || window.location.pathname === "/sixth") ? "" :
            <div>
               <Link to="/third"><button className="btn">3rd Grade</button></Link>
               <Link to="/fourth"><button className="btn">4th Grade</button></Link>
               <Link to="/fifth"><button className="btn">5th Grade</button></Link>
               <Link to="/sixth"><button className="btn">6th Grade</button></Link>
              </div>
            }
          </p>
          <br/>
          <Footer />
          </div>
       
       
      );
    }
  };

export default Main;
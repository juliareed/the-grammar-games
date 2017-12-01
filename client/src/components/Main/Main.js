import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./main.css"

class Main extends Component {
     
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
          <br/>
          <p>
            <Link to="/third"><button className="btn btn-primary btn-md">3rd Grade</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/fourth"><button className="btn btn-primary btn-md">4th Grade</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/fifth"><button className="btn btn-primary btn-md">5th Grade</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/sixth"><button className="btn btn-primary btn-md">6th Grade</button></Link>
          </p>
          <br/>
          <Footer />
          </div>
        </div>
       
       
      );
    }
  };

export default Main;
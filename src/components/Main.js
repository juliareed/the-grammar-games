import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"

class Main extends Component {
  
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
  
            <footer>
              <hr />
              <p className="pull-right">
                <i>Techy && Cute, Inc.</i>
              
              </p>
            </footer>
          </div>
        </div>
      );
    }
  };
  
  // Export the module back to the route
  export default Main;
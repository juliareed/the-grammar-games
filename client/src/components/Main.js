import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
import Video from "./Video/Video"

class Main extends Component {
  
    render() {
  
      return (
        <div className="main-container">
          <div className="container">
          <Navbar />
          <Video />
  
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
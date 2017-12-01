import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Third from "./components/Grade/Third.js"
import Fourth from "./components/Grade/Fourth.js"
import Fifth from "./components/Grade/Fifth.js"
import Sixth from "./components/Grade/Sixth.js"
import Main from "./components/Main/Main.js"
import "./components/Main/main.css"

class App extends Component {
     
    render() {
  
      return (
        <Router>
          <div>
            <Navbar />
              <Route path="/" component={Main} />
              <Route path="/Third" component={Third} />
              <Route path="/Fourth" component={Fourth} />
              <Route path="/Fifth" component={Fifth} />
              <Route path="/Sixth" component={Sixth} />
          </div>
          <Footer />
        </Router>
        
      );
    }
  };
  
  // Export the module back to the route
  export default App;
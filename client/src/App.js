import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Third from "../src/components/Grades/Third.js"
import Fourth from "../src/components/Grades/Fourth.js"
import Fifth from "../src/components/Grades/Fifth.js"
import Sixth from "../src/components/Grades/Sixth.js"
import Main from "../src/components/Main/Main.js"
import Leaderboard from "../src/components/Leaderboard/Leaderboard.js"


const App = () =>
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/third" component={Third} />
      <Route path="/fourth" component={Fourth} />
      <Route path="/fifth" component={Fifth} />
      <Route path="/sixth" component={Sixth} />
      <Route path="/third/sentence" component={Third} />
      <Route path="/third/nouns" component={Third} />
      <Route path="/third/pronouns" component={Third} />
      <Route path="/fourth/phrases" component={Fourth} />
      <Route path="/fourth/conjunctions" component={Fourth} />
      <Route path="/fourth/relativepronouns" component={Fourth} />
      <Route path="/fifth/punctuating" component={Fifth} />
      <Route path="/fifth/correlativeconjunctions" component={Fifth} />
      <Route path="/fifth/introverbtense" component={Fifth} />
      <Route path="/sixth/possessivepronouns" component={Sixth} />
      <Route path="/sixth/reflexivepronouns" component={Sixth} />
      <Route path="/sixth/perfectverbs" component={Sixth} />
      <Route path="/leaderboard" component={Leaderboard} />
    </div>
  </Router>
  
export default App;
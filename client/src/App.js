import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Third from "../src/components/Grades/Third.js"
import Fourth from "../src/components/Grades/Fourth.js"
import Fifth from "../src/components/Grades/Fifth.js"
import Sixth from "../src/components/Grades/Sixth.js"
import Main from "../src/components/Main/Main.js"
import Video from "./components/Video/Video"
import Leaderboard from "../src/components/Leaderboard/Leaderboard.js"


const App = () =>
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/third" component={Third} />
      <Route path="/fourth" component={Fourth} />
      <Route path="/fifth" component={Fifth} />
      <Route path="/sixth" component={Sixth} />
      <Route path="/third/sentence/:vidId" component={Video} />
      <Route path="/third/nouns/:vidId" component={Video} />
      <Route path="/third/pronouns/:vidId" component={Video} />
      <Route path="/fourth/phrases/:vidId" component={Video} />
      <Route path="/fourth/conjunctions/:vidId" component={Video} />
      <Route path="/fourth/relativepronouns/:vidId" component={Video} />
      <Route path="/fifth/punctuating/:vidId" component={Video} />
      <Route path="/fifth/correlativeconjunctions/:vidId" component={Video} />
      <Route path="/fifth/introverbtense/:vidId" component={Video} />
      <Route path="/sixth/possessivepronouns/:vidId" component={Video} />
      <Route path="/sixth/reflexivepronouns/:vidId" component={Video} />
      <Route path="/sixth/perfectverbs/:vidId" component={Video} />
    </div>
  </Router>
  
export default App;
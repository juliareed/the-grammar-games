import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Third from "../src/components/Grades/Third.js"
import Fourth from "../src/components/Grades/Fourth.js"
import Fifth from "../src/components/Grades/Fifth.js"
import Sixth from "../src/components/Grades/Sixth.js"
import Main from "../src/components/Main/Main.js"
<<<<<<< HEAD
import Video from "./components/Video/Video"
=======
import Leaderboard from "../src/components/Leaderboard/Leaderboard.js"
>>>>>>> b804964a23798fa76a5affd33c450dcbe54be2fe


const App = () =>
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/third" component={Third} />
      <Route path="/fourth" component={Fourth} />
      <Route path="/fifth" component={Fifth} />
      <Route path="/sixth" component={Sixth} />
<<<<<<< HEAD
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
=======
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
>>>>>>> b804964a23798fa76a5affd33c450dcbe54be2fe
    </div>
  </Router>
  
export default App;
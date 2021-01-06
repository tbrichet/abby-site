import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Lessons from './components/Lessons';
import Nav from './components/Nav';
// import Performances from './components/Performances';
// import Recordings from './components/Recordings';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Lessonspage from './pages/Lessonspage';
import Performancespage from './pages/Performancespage';
import Recordingspage from './pages/Recordingspage';
import Contactpage from './pages/Contactpage';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/about">
          <Aboutpage />
        </Route>
        <Route exact path="/lessons" component={Lessonspage}/>
        <Route path="/">
          <Homepage />
        </Route>
        <Route exact path="/performances">
          <Performancespage />
        </Route>
        <Route exact path="/recordings">
          <Recordingspage />
        </Route>
        <Route exact path="/contact">
          <Contactpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

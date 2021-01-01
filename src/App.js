import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Nav from './components/Nav';
import Performances from './components/Performances';
import Recordings from './components/Recordings';

function App() {

  return (
    <div>
      <Nav />
      <main>
        <Home />
        <About />
        <Lessons />
        <Performances />
        <Recordings />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Contacts />
      </main>
    </>
  );
};

export default App;

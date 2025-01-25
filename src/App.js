
import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const skillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      
    }
  };

  return (
    <>
      <Router>
        
        <Navbar scrollToSkills={scrollToSkills} />
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

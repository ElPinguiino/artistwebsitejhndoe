import React, {useState} from 'react';
import Home from './pages/index';
import Music from './pages/music';
import Videos from './pages/videos';
import Discography from './pages/discography';
import Tour from './pages/tour';
import Merch from './pages/merch';
import './App.css';
import { render } from "react-dom";

import { 
  BrowserRouter,
  Routes, 
  Route 
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

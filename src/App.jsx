import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

const App = () => {
  const createSpan = (e) => {
    const clickAnimate = document.getElementById('click'); // Pastikan ada elemen dengan id 'click'
    let span = document.createElement('span');
    span.style.position = 'absolute'; // Tambahkan posisi absolute
    span.style.top = `${e.pageY}px`;
    span.style.left = `${e.pageX}px`;

    clickAnimate.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 500);
  }
  return (
    <div id='click' onClick={createSpan}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
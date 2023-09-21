import React from 'react';
import ReactDOM from 'react-dom/client';
import './utility/style/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home.tsx';
import About from './page/about.tsx';
import Contact from './page/contact.tsx';
import History from './page/history.tsx';
import Projects from './page/projects.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

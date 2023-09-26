import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home-page.tsx';
import About from './page/about-page.tsx';
import Contact from './page/contact-page.tsx';
import Projects from './page/projects-page.tsx';
import Experience from './page/experience-page.tsx';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);

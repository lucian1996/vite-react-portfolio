import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './utility/config/background.sass'
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/interface/animated-routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);

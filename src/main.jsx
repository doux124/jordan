import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/jordan">
      <App />
    </Router> 
  </React.StrictMode>
);



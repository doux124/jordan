import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './standards/Loader';
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/jordan">
      <Suspense fallback={<Loader loading={true} />}>
        <App />
      </Suspense>
    </Router> 
  </React.StrictMode>
);



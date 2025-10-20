// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global styles (including Tailwind)
import App from './App.jsx'; // FIX: Changed from './App' to './App.jsx' to match disk casing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
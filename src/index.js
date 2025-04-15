import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider> {/* Wrap */}
  </React.StrictMode>
);

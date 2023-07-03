import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import'./styles/mobile.css'
import'./styles/tablet.css'
import { HashRouter } from 'react-router-dom'
import Entry from './Entry';
import { ThemeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <Entry />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);


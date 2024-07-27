/*
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import ReactDOM from 'react-dom/client'
import Sattva from './components/Sattva';
import HomePage from './components/Home';
import Clases from './components/Clases';
import ClasesVirtuales from './components/ClasesVirtuales';
import Contacto from './components/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/sattva" element={<Sattva />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/clases-online" element={<ClasesVirtuales />} />
        <Route path="/contactos" element={<Contacto />} />
      </Routes>

    </React.StrictMode>
  </Router>
);*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sattva from './components/Sattva';
import HomePage from './components/Home';
import Clases from './components/Clases';
import ClasesVirtuales from './components/ClasesVirtuales';
import Contacto from './components/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/sattva" element={<Sattva />} />
        <Route path="/clases-online" element={<ClasesVirtuales />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/clases" element={<Clases />} />
      </Routes>
    </React.StrictMode>
  </Router>
);



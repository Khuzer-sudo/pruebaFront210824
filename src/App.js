// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio'; 
import Respuesta12 from './components/Respuesta12';
import Respuesta3 from './components/Respuesta3';
import Respuesta4 from './components/Respuesta4';
import Respuesta5 from './components/Respuesta5';
import Respuesta6 from './components/Respuesta6';
import Respuesta7 from './components/Respuesta7';
import Respuesta8 from './components/Respuesta8';
import Respuesta9 from './components/Respuesta9';
import Formulario from './components/Formulario';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/respuesta12" element={<Respuesta12 />} />
          <Route path="/respuesta3" element={<Respuesta3 />} />
          <Route path="/respuesta4" element={<Respuesta4 />} />
          <Route path="/respuesta5" element={<Respuesta5 />} />
          <Route path="/respuesta6" element={<Respuesta6 />} />
          <Route path="/respuesta7" element={<Respuesta7 />} />
          <Route path="/respuesta8" element={<Respuesta8 />} />
          <Route path="/respuesta9" element={<Respuesta9 />} />
          <Route path="/Formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
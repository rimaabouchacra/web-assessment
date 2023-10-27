import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/main_ar';

function App() {
  

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main/>} />
          
      </Routes>  
    </Router> 

  );
}


export default App;


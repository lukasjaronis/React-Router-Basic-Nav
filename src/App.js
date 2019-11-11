import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
  <Router>
    <Navigation />
  </Router>
  </div>
);

export default App;

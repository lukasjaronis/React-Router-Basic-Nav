import React from 'react';
import { Home, About, Contact } from '../components';
import {Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Link to='/'>Home</Link>
        <Route exact path='/' component={Home} />
        </div>
        <div>
        <Link to='/about'>About</Link>
        <Route path='/about' component={About} />
        </div>
        <div>
        <Link  to='/contact'>Contact</Link>
        <Route path='/contact' component={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
// import { Home, About, Contact, Navigation } from './components';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
);

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup';

function App() {
  return (
    <>
     <Router>
        <Navbar />
      
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Product}/>
          <Route path="/signup" component ={SignUp}/>
        </Switch>
        </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
     <Router>
        <Navbar />
      
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        </Router>
    </>
  );
}

export default App;

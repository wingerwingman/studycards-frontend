import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import CreateCard from './components/CreateCard'
import CategoryPath from './components/CategoryPath'
const App = (props) => {

    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/createcard" component={CreateCard} />
        <Route exact path="/CategoryPath" component={CategoryPath} />
      </div>
      </Router>
    );
  

}

export default App

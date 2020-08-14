import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import FlashCards from './components/FlashCards'
import CreateCard from './components/CreateCard'

const App = () => {

    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/FlashCards" component={FlashCards} />
        <Route exact path="/CreateCard" component={CreateCard} />
      </div>
      </Router>
    );
  

}

export default App

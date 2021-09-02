// Dependency Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

// Stylesheet Imports
import './App.css';
import logo from './logo.svg';

// Page Imports
import Home from './pages/Home'
import AnimalIndex from './pages/AnimalsIndex';
import DonationIndex from './pages/DonationsIndex';
import WishDetail from './pages/WishDetail';
import UserDetail from './pages/UserDetail';
import AnimalDetail from './pages/AnimalDetail';

const API_URL = 'http://localhost:8000'

function App() {
  return (
    <div className="App">
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/animals" component={AnimalIndex}/>
        <Route path="/animals/:id" component={AnimalDetail} />
        <Route exact path="/donations" component={DonationIndex} />
        <Route path="/wishes/:id" component={WishDetail} />
        <Route exact path="/account" component={UserDetail} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

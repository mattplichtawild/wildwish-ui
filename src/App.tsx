import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import CardExampleCard from './WishCard';
import Home from './pages/Home'

const API_URL = 'http://localhost:8000'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/animals" component={CardExampleCard}/>
        {/* <Route path="/animals/:id" component={AnimalDetail} />
        <Route exact path="/donations" component={DonationIndex} />
        <Route path="/wishes/:id" component={WishDetail} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;

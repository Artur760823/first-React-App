import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className="app">
          {<Header />}
          <main>
            {<Navigation />}
            {<Page />}
          </main>
          {<Footer />}
        </div>
      </Router>
    )
  }
}


export default App;

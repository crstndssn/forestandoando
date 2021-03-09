import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Layouts
import Home from './views/Home';
import Store from './views/Store';
import Reforest from './views/Reforest';
import Fundacion from './views/Fundacion';

// Components
import Navigation from './layouts/home/Navigation'

export default class App extends Component {
  render() {
    return <div className="container mx-auto">
      <Router>

        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/fundacion" component={Fundacion} />
        <Route path="/tienda" component={Store} />
        <Route path="/yoplanto" component={Reforest} />

      </Router>
    </div>
  }
}

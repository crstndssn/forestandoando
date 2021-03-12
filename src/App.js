import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Layouts
import Home from './views/Home';
import Store from './views/Store';
import Blog from './views/Blog';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return <div className="container mx-auto">
      <Router>

        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/tienda" component={Store} />
        <Route path="/blog" component={Blog} />

        <Footer />

      </Router>
    </div>
  }
}

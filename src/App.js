import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Layouts
import Home from './views/Home';
import Store from './views/Store';
import Admin from './views/Admin';
import Login from './views/Login';
import Product from './views/Product';
import AddProduct from './views/AddProduct';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return <div className="bg-organic h-full">
      <div className="container mx-auto">
        <Router>

          <Navigation />

          <Route exact path="/" component={Home} />

          <Route path="/tienda" component={Store} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/add-product" component={AddProduct} />

          <Footer />

        </Router>
      </div>

    </div>
  }
}

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layouts
import Store from './views/Store';
import Admin from './views/Admin';
import Login from './views/Login';
import Product from './views/Product';
import Edit from './layouts/EditProduct';
import AddProduct from './views/AddProduct';
import Cart from './views/Cart';
import Stock from './views/Stock';
import Reset from './views/Reset';
import Provedores from './views/Provedores';

import whatsapp from './resources/whatsapp.svg'


// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return <div className="bg-organic min-h-screen">
      <a href="https://wa.link/447it8" target="_blank">
        <img src={whatsapp} className="md:w-16 xs:w-12 md:bottom-10 md:right-10 xs:bottom-5 xs:right-5 fixed z-10" alt="whatsapp"/>
      </a>
      <div className="w-full z-10">
        <Router>

          <Navigation />

          {/* <Route path="/home" component={Home} /> */}

          <Switch>

            {/* ROUTES USER */}

            <Route exact path="/" component={Store} />

            <Route path="/product/:id">
              <Product />
            </Route>

            <Route path="/edit/:id">
              <Edit />
            </Route>

            <Route path="/cart" component={Cart} />
            <Route path="/reset" component={Reset} />

            <Route path="/login" component={Login} />


            {/* <Route path="/stock" component={Stock} /> */}


            {/* ROUTES ADMIN */}




          </Switch>

          <Route path="/admin" component={Admin} />
          <Route path="/stock" component={Stock} />
          <Route path="/provedores" component={Provedores} />
          <Route path="/add-product" component={AddProduct} />


          <Footer />

        </Router>


      </div>
    </div>
  }
}

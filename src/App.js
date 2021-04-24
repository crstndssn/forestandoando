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
import Provedores from './views/Provedores';

import backgroundImg from './resources/background-fa.png'


// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return <div className="bg-organic min-h-screen">

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

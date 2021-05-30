import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Reset from './components/auth/Reset';

import Admin from './components/admin/Admin'

import Home from './views/Home';

import Post from './components/blog/Post';
import AddPost from './components/blog/AddPost';
import EditPost from './components/blog/EditPost';
import Blog from './components/blog/Blog';


import Product from './components/library/Product';
import AddProduct from './components/library/AddProduct';
import EditProduct from './components/library/EditProduct';
import Stock from './components/library/Stock';
import Biblioteca from './components/library/Library';

import Pay from './components/pricing/Pay'
import Premium from './components/pricing/Premium';
import Foundation from './components/foundation/Foundation';

import Legal from './components/home/Terms';
import Questions from './components/home/Questions';


import whatsapp from './resources/whatsapp.svg'



export default class App extends Component {
  render() {
    return <div className="bg-organic min-h-screen">

      <div className="w-full z-10">

        <Router>

          <Navigation />

          <Switch>

            {/* ROUTES USER */}

            <Route exact path="/" component={Home} />

            {/* auth */}
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/signup" component={Signup} />
            
            {/* admin */}
            <Route path="/settings" component={Admin} />
            <Route path="/add-post" component={AddPost} />
            <Route path="/add-product" component={AddProduct} />

            {/* library */}
            <Route path="/product/:id" component={Product}/>
            <Route path="/edit-product/:id" component={EditProduct}/>
            <Route path="/biblioteca" component={Biblioteca} />
            <Route path="/stock" component={Stock} />

            {/* blog */}
            <Route path="/post/:id" component={Post}/>
            <Route path="/edit-post/:id" component={EditPost}/>
            <Route path="/blog" component={Blog} />

            {/* pay */}
            <Route path="/pagos" component={Pay} />

            <Route path="/legal" component={Legal} />

          </Switch>

          <Footer />

        </Router>

      </div>
    </div>
  }
}

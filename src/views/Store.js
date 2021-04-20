import React, { Component } from 'react'

// Components
import Home from '../layouts/Home';
import Products from '../layouts/Products';
import Categorias from '../layouts/Categorias';

export default class Store extends Component {
    render() {
        return (
            <div>
                <div className="mt-6">
                    <Home />
                </div>
                <div className="mt-6">
                    <Categorias />
                </div>
                <div className="mt-6">
                    <Products />
                </div>
            </div>

        )
    }
}

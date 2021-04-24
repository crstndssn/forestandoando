import React, { Component } from 'react'



// Components
import Home from '../layouts/Home';
import Products from '../layouts/Products';
import Categorias from '../layouts/Categorias';

export default class Store extends Component {
    render() {
        return (
            <div>
                <Home />
                <div className="bg-brand py-10">
                    <Categorias />
                </div>
                <div className="mt-6">
                    <Products />
                </div>
            </div>

        )
    }
}

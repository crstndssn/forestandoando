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
                <div className="bg-brand md:py-10 xs:py-20 flex justify-center items-center">
                    <Categorias />
                </div>
                <div className="mt-6">
                    <Products />
                </div>
            </div>

        )
    }
}

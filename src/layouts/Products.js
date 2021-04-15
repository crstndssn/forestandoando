import React, { Component } from 'react'

import Product from '../components/Product'
import AddProduct from '../components/AddProduct'

export default class mainProducts extends Component {
    render() {
        return (
            <div className="grid md:grid-cols-3 gap-3">
                <Product />
                <Product />
                <Product />
                <Product />
                <AddProduct className="h-36" />
            </div>
        )
    }
}

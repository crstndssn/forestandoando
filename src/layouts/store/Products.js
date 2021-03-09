import React, { Component } from 'react'
import Product from '../../components/store/Product'

export default class mainProducts extends Component {
    render() {
        return (
            <div className="grid grid-cols-3 gap-3">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

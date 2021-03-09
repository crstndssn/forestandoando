import React, { Component } from 'react'

// Components
import Products from '../layouts/store/Products';

export default class Store extends Component {
    render() {
        return (
            <div className="mt-6">
                <Products />
            </div>
        )
    }
}

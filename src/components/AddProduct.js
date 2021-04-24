import React, { Component } from 'react'

export default class AddProduct extends Component {
    render() {
        return (
            <div className="container mx-auto flex">
                <div className="w-full h-40 shadow rounded-xl bg-leave flex justify-center items-center">
                    <p className="text-nature text-3xl font-bold">+ Add Product</p>
                </div>
            </div>
        )
    }
}

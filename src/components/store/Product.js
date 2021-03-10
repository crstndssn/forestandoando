import React, { Component } from 'react'

import planta from '../../resources/planta.jpg'

export default class Product extends Component {
    render() {
        return (
            <div className="flex">
                <div className="shadow rounded-xl">
                    <div className="p-3 flex justify-between items-center">
                        <div>
                            <img className="rounded-xl" src={planta} alt="figure" />
                        </div>
                        <div className="m-4 flex justify-between items-start flex-col">
                            <div className="xl:mb-6 md:mb-0">
                                <h2 className="font-serif font-medium text-4xl leading-none">Monstera</h2>
                                <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">Interior</p>
                            </div>
                            <div>
                                <button className="text-white bg-nature p-3 rounded-xl font-serif font-medium text-xl leading-none mt-2">
                                    $10.000
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

import planta from '../resources/planta.jpg'

export default class Product extends Component {
    render() {
        return (
            <div className="flex">
                <div className="flex justify-between items-center flex-col shadow rounded bg-leave">
                    <div>
                        <img className="rounded-t " src={planta} alt="figure" />
                    </div>
                    <div className="w-full p-3 flex justify-between items-start">
                        <div>
                            <h2 className="font-serif font-medium text-3xl leading-none">Monstera</h2>
                            <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">Interior</p>
                        </div>
                        <div>
                            <button className="text-white bg-nature p-3 rounded font-serif font-medium text-xl leading-none mt-2">
                                $10.000
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

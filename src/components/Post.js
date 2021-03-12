import React, { Component } from 'react'

import planta from '../resources/planta.jpg'

export default class Post extends Component {
    render() {
        return (
            <div>
                <div className="flex">
                    <div className="shadow rounded-xl">
                        <div className="p-3 flex justify-between items-center flex-col">
                            <div className ="max-w-sm w-full lg:max-w-full lg:flex">
                                <img className="rounded-xl" src={planta} alt="figure" />
                            </div>
                            <div className="m-4 w-full flex justify-center items-start flex-col">
                                <h2 className="font-serif font-medium text-4xl leading-none">¿Como plantar?</h2>
                                <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

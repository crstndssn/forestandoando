import React from 'react'

import product from '../resources/planta.jpg'
import equis from '../resources/delete.svg'
import mas from '../resources/mas.svg'
import menos from '../resources/menos.svg'

const Cart = () => {
    return (
        <div className="mt-6 flex justify-center items-center text-gray-800">
            <div className="xs:w-full md:w-2/3 flex justify-between items-center shadow rounded bg-leave my-2">
                <div className="xs:w-1/4 md:w-60">
                    <img className="rounded" src={product} />
                </div>
                <div className="w-1/4 p-2">
                    <h1 className="font-medium xs:text-xl md:text-4xl">Name</h1>
                    <p className="xs:text-lg md:text-2xl">Valor</p>
                </div>
                <div className="flex">
                    <img className="rounded xs:w-5 md:w-10" src={menos} />
                    <div className="p-2 border border-brand rounded-full mx-2">
                        <p className="text-brand xs:text-xl md:text-3xl">1</p>
                    </div>
                    <img className="rounded xs:w-5 md:w-10" src={mas} />
                </div>
                <div className="">
                    <img className="rounded xs:w-5 md:w-7 xs:mx-5 md:mx-10" src={equis} />
                </div>
            </div>
        </div>
    )
}

export default Cart

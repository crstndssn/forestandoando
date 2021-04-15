import React from 'react'

import planta from '../resources/planta.jpg'
import sun from '../resources/sun.svg'
import water from '../resources/water.svg'
import wheater from '../resources/wheater.svg'
import share from '../resources/share.svg'

const Product = () => {
    return (
        <div className="flex justify-center items-center md:flex-row xs:flex-col mt-8 text-gray-800">

            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <img className="rounded-xl" src={planta} alt="figure" />
            </div>

            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <div className="mt-4">
                    <h1 className="md:text-6xl xs:text-3xl font-medium my-1">Nombre</h1>
                    <p className="md:text-xl xs:text-base text-gray-400 my-1">Nombre cientifico</p>
                    <p className="md:text-3xl xs:text-xl font-medium my-1">Interior</p>
                    <p className="md:text-xl xs:text-lg my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="w-full flex justify-around mt-3 bg-soft rounded-md py-4">
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-12 md:w-16 mb-2" src={sun} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">Poca</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-8 md:w-10 mb-2" src={water} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">cada 1 día</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-7 md:w-9 mb-2" src={wheater} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">36º</p>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center text-center gap-2 mt-5">
                    <p className="w-full bg-brand text-white p-3 text-xl rounded-lg">$10.000</p>
                </div>

            </div>


        </div>
    )
}

export default Product

import React from 'react'

import planta from '../resources/planta.jpg'
import sun from '../resources/sun.svg'
import water from '../resources/water.svg'
import wheater from '../resources/wheater.svg'
import share from '../resources/share.svg'

const AddProduct = () => {
    return (
        <div className="container mx-auto flex justify-center items-center flex-col mt-10">
            <div className="w-full flex justify-center">
                <h1 className="xs:text-3xl md:text-5xl font-medium text-brand">Añadir producto</h1>
            </div>

            <div className="flex justify-center items-center flex-col mt-8">


                <div className="md:w-1/2 xs:w-full">
                    <div className="w-full xs:h-60 md:h-80">
                        <div className="bg-gray-100 shadow min-h-full rounded-lg flex justify-center items-center">
                            <p className="font-medium text-2xl text-gray-400">+ Subir imagen</p>
                        </div>
                    </div>
                </div>


                <div className="md:w-1/2 xs:w-full">
                    <div className="mt-4 w-full ">

                        <input className="w-full bg-organic text-gray-900 py-2 md:text-6xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none" placeholder="Titulo" />

                        <input className="w-full bg-organic text-gray-700 py-4 text-lg focus:outline-none" placeholder="Nombre científico" />

                        <input className="w-full bg-organic text-gray-700 md:text-3xl xs:text-xl font-medium my-1 focus:outline-none" placeholder="Interior o exterior" />

                        <textarea className="w-full bg-organic mt-6 min-h-30 shadow rounded-lg p-4 md:text-xl xs:text-lg my-1 text-gray-800  h-32 focus:outline-none" placeholder="Description"></textarea>

                    </div>

                    <div className="w-full flex justify-around mt-3 bg-brand bg-opacity-10 rounded-md py-4">

                        <div className="flex justify-center items-center flex-col">
                            <img className="xs:w-12 md:w-16 mb-2" src={sun} alt="sun" />
                            <input className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none" placeholder="Clima" />
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <img className="xs:w-8 md:w-10 mb-2" src={water} alt="water" />
                            <input className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none" placeholder="Agua" />
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <img className="xs:w-7 md:w-9 mb-2" src={wheater} alt="wheater" />
                            <input className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none" placeholder="Temp" />
                        </div>

                    </div>

                    <div className="w-full flex justify-center items-center text-center gap-2 mt-5">

                        <div className="w-full text-xl rounded-lg text-center">
                            <input className="w-full bg-transparent border-2 border-brand text-brand p-3 text-xl rounded-lg text-center placeholder-brand focus:outline-none" placeholder="Precio" />
                        </div>

                    </div>

                    <div class="flex justify-center items-center w-full mt-10">
                        <button action="submit"
                            class="md:w-1/3 xs:w-1/2 bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Publicar</button>
                    </div>

                </div>





            </div>
        </div>
    )
}

export default AddProduct

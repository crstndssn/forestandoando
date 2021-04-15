import React from 'react'

const AddProduct = () => {
    return (
        <div className="container mx-auto flex justify-center items-center flex-col">
            <div className="w-full flex justify-start">
                <h1 className="text-4xl font-medium"><i>Crear Post</i></h1>
            </div>
            <div className="w-2/3 flex justify-center items-center flex-col mt-10">

                <input className="w-full bg-gray-100 p-5 rounded text-2xl font-semibold my-5" />

                <div className="w-full flex min-h-70">
                    <div className="w-2/3 mr-5">
                        <div className="bg-gray-300 min-h-full rounded-lg flex justify-center items-center">
                            <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center gap-5 flex-col">
                        <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                            <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                        </div>
                        <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                            <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                        </div>
                        <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                            <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                        </div>
                    </div>
                </div>

                <textarea className="mt-6 min-h-50 bg-gray-100 p-4 rounded-md text-xl font-base text-gray-800 w-full h-32 focus:outline-none"></textarea>

                <div class="flex justify-center items-center w-full">
                    <button action="submit"
                        class="md:w-1/3 xs:w-1/2 bg-black text-white my-4 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Publicar</button>
                </div>

            </div>
        </div>
    )
}

export default AddProduct

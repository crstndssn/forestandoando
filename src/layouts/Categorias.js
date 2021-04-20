import React from 'react'

const Categorias = () => {
    return (
        <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
            <div className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Flores</p>
            </div>
            <div className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Follaje</p>
            </div>
            <div className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Suculentas</p>
            </div>
            <div className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Cactus</p>
            </div>
            <div className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Accesorios</p>
            </div>
        </div>
    )
}

export default Categorias

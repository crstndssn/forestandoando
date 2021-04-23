import React from 'react'
import { Link } from 'react-router-dom'

const Categorias = () => {
    return (
        <div  style={{zIndex:1}} className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
            <Link to="/" className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Flores</p>
            </Link>
            <Link to="/" className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Follaje</p>
            </Link>
            <Link to="/" className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Suculentas</p>
            </Link>
            <Link to="/" className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Cactus</p>
            </Link>
            <Link to="/" className="w-full h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-3xl text-brand font-medium">Accesorios</p>
            </Link>
        </div>
    )
}

export default Categorias

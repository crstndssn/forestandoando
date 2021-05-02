import React from 'react'
import { Link } from 'react-router-dom'

const Categorias = () => {
    return (
        <div className="container mx-auto w-full grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-5 sm:grid-cols-2 gap-7 bg-brand md:py-10 xs:py-0">
            <Link to="/flores" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Flores</p>
            </Link>
            <Link to="/follaje" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Follaje</p>
            </Link>
            <Link to="/suculentas" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Suculentas</p>
            </Link>
            <Link to="/cactus" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Cactus</p>
            </Link>
            <Link to="/palmas" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Palmas</p>
            </Link>
            <Link to="/accesorios" className="w-full md:h-48 xs:h-36 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="md:text-4xl xs:text-3xl text-brand font-medium">Accesorios</p>
            </Link>
        </div>
    )
}

export default Categorias

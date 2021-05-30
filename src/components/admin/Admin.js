import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-7 gap-5">
            <Link to="/stock" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Productos</p>
            </Link>
            <Link to="/provedores" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Provedores</p>
            </Link>
            <Link to="/add-product" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Añadir Producto</p>
            </Link>
            <Link to="/add-post" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Añadir Post</p>
            </Link>
            <Link to="/add-post" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Posts</p>
            </Link>
        </div>
    )
}

export default Admin

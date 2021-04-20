import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-7 gap-5">
            <Link to="/stock" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Stock</p>
            </Link>
            <Link to="/provedores" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Provedores</p>
            </Link>
            <Link to="/add-product" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <p className="text-4xl text-brand font-medium">Añadir Producto</p>
            </Link>
        </div>
    )
}

export default Admin

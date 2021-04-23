import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-80">
            <div className="w-2/4 flex justify-center items-center flex-col text-center">
                <h1 className="text-8xl font-medium"><span className="text-nature">forestando</span><span className="text-ando">ando</span></h1>
                <p className="text-gray-800 text-3xl">Siembra vida, aprende de la naturaleza, registrate y cambia el mundo.</p>
                <div className="mt-7">
                    <Link to="/login" className="mt-3 p-3 border-2 border-brand bg-brand text-white rounded-xl text-2xl font-medium">Yo planto</Link>
                </div>

            </div>
        </div>
    )
}

export default Home

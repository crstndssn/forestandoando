import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../resources/planta-2.png'
import img2 from '../resources/planta-1.png'
import img3 from '../resources/planta-mobile.png'


const Home = () => {
    return (
        <div className="relative w-full flex justify-center items-center">
            <div className="md:flex xs:hidden bottom-0 right-0 absolute w-full justify-between items-end min-h-90">
                <img src={img1} className="max-h-screen" alt="interior" />
                <img src={img2} className="max-h-screen" alt="interior" />
            </div>
            <div className="md:hidden xs:flex bottom-0 absolute flex w-full justify-between items-end">
                <img src={img3} className="max-h-screen" alt="orquídeas" />
            </div>
            
            <div className="container mx-auto relative md:w-2/4 xs:w-3/4 min-h-90 flex md:justify-center xs:justify-start xs:top-32 md:top-0 items-center flex-col text-center">
                <h1 className="md:text-8xl xs:text-4xl font-medium"><span className="text-nature">forestando</span><span className="text-ando">ando</span></h1>
                <p className="text-brand md:text-3xl xs:text-xl">Siembra vida y aprende de la naturaleza.</p>
                <div className="mt-7">
                    <Link to="/login" className="hover:shadow transition duration-300 w-full border-2 bg-brand hover:bg-transparent border-brand text-white hover:text-brand my-2 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Yo planto</Link>
                </div>
            </div>
        </div>
    )
}

export default Home

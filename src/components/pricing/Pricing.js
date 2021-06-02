import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CheckCircleIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import { auth } from '../../firebase'



const Pricing = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(true);
            } else {
                setUser(false)
            }
        })
    })

    return (
        <div className="mx-auto container grid md:grid-cols-3 xs:min-h-auto text-brand gap-5">
            <div className="w-full h-full flex justify-between items-center flex-col shadow bg-white rounded-xl p-10 md:mt-0 xs:mt-5">
                <div className="w-full flex justify-start items-center flex-col">
                    <div className="w-full flex justify-start mt-4">
                        <p className="xs:text-2xl md:text-3xl font-base font-semibold rounded-full">Gratis</p>
                    </div>
                    <div className="w-full flex justify-start items-baseline my-4">
                        <p className="xs:text-5xl md:text-6xl font-semibold">$0</p>
                        <span className="text-xl">/cop</span>
                    </div>
                    <div className="w-full flex justify-start items-center flex-col my-4">
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Aprende a forestar</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Acceso limitado</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Perderás descuentos</p>
                        </div>
                    </div>
                </div>
                {
                    !user === true ? (<Link to="/login" className="w-full text-center border-2 border-brand font-medium hover:border-brand bg-transparent hover:bg-brand hover:text-white transition duration-200 xs:text-xl md:text-2xl py-2 mt-12 mb-5 rounded-xl">Ingresar</Link>) : (<div></div>)
                }
                
            </div>
            <div className="w-full h-full flex justify-between items-center flex-col shadow bg-white rounded-xl md:p-10 xs:p-7 md:mt-0 xs:mt-2">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full flex justify-start mt-4">
                        <p className="xs:text-2xl md:text-3xl font-base font-semibold rounded-full">3 meses por</p>
                    </div>
                    <div className="w-full flex justify-start items-baseline my-4">
                        <p className="xs:text-5xl md:text-6xl font-semibold">$24.900</p>
                        <span className="text-xl">/cop</span>
                    </div>
                    <div className="w-full flex justify-start items-baseline my-4">
                        <p className="xs:text-xl md:text-2xl">Contribuye a un cambio, aprende de proyectos con <span className="font-semibold text-brand">impacto ambiental</span>, cambia tu estilo de vida!</p>
                    </div>
                    <div className="w-full flex justify-start items-center flex-col my-4">
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Aprende a forestar</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Acceso al contenido</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <Link to="/fundacion" className="xs:text-xl md:text-2xl">Visítanos y siembra vida</Link>
                        </div>
                    </div>
                </div>
                <a href="https://mpago.li/17UZRJw" target="blank" className="w-full text-center border-2 border-brand bg-brand font-medium text-white hover:text-brand hover:border-brand hover:bg-white transition text-2xl py-2 mt-10 mb-5 rounded-xl duration-200">Comienza</a>
            </div>
            <div className="w-full h-full flex justify-between items-center flex-col shadow bg-white rounded-xl md:p-10 xs:p-7 md:mt-0 xs:mt-2">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full flex justify-start mt-4">
                        <p className="xs:text-2xl md:text-3xl font-base font-semibold rounded-full">3 meses por</p>
                    </div>
                    <div className="w-full flex justify-start items-baseline my-4">
                        <p className="xs:text-5xl md:text-6xl font-semibold">$49.900</p>
                        <span className="text-xl">/cop</span>
                    </div>
                    <div className="w-full flex justify-start items-baseline my-4">
                        <p className="xs:text-lg md:text-2xl">Aprende ingles, disfruta de nuestro contenido, visitanos y te aprende de la naturaleza en <span className="font-semibold text-brand">WAH</span>, cambia tu vida!</p>
                    </div>
                    <div className="w-full flex justify-start items-center flex-col my-4">
                        <div className="w-full  flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Aprende en dos idiomas</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Acceso a forestando Ando</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <p className="xs:text-xl md:text-2xl">Acceso a WAH</p>
                        </div>
                        <div className="w-full flex justify-start items-center my-2">
                            <CheckCircleIcon className="md:w-6 xs:w-5 mr-1 text-brand" />
                            <Link to="/fundacion" className=" xs:text-lg md:text-2xl">Visitanos y disfruta</Link>
                        </div>
                    </div>
                </div>
                <a href="https://mpago.li/2Wukg4d" target="blank" className="w-full text-center border-2 border-brand bg-brand font-medium text-white hover:text-brand hover:border-brand hover:bg-white transition durattion-200 text-2xl py-2 mt-14 mb-5 rounded-xl">Comienza</a>
            </div>
        </div>
    )
}

export default Pricing

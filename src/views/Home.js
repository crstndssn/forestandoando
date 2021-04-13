import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HomeIllustration from '../resources/home-illustration.svg'
import HomeUno from '../resources/ima1.png'
import HomeDos from '../resources/ima2.png'
import HomeTres from '../resources/ima3.png'

import planet from '../resources/planet.svg'
import learn from '../resources/learn.svg'
import forest from '../resources/forest.svg'
import instagram from '../resources/instagram.svg'
import facebook from '../resources/facebook.svg'
import whatsapp from '../resources/whatsapp.svg'

export default class Home extends Component {
    render() {
        return (
            <div className="flex justify-center items-center flex-col">

                <div className="w-full min-h-80 flex justify-center items-center md:flex-row xs:flex-col-reverse my-5">
                    <div className="md:w-2/5 xs:w-full flex justify-end md:items-start xs:items-center flex-col">
                        <h1 className="text-nature font-sans font-bold md:text-7xl xs:text-5xl tracking-tight leading-none">Forestando</h1>
                        <h1 className="text-ando font-sans font-bold text-7xl xs:text-5xl tracking-tight leading">Ando</h1>
                        <p className="text-gray-900 md:text-2xl xs:text-xl my-1 md:text-left xs:text-center">Siembra en cualquier lugar.<br/> Aprende de la naturaleza<br/>y cambia el mundo</p>
                        <Link to="/tienda" className="border-2 border-nature text-nature font-bold py-2 md:px-4 xs:px-3 rounded-xl md:text-2xl xs:text-xl my-2">Yo planto</Link>
                    </div>
                    <div className="md:w-3/5 xs:w-full flex justify-center items-center py-6">
                        <img src={HomeIllustration} alt="uno" className="" />
                    </div>
                </div>
                
                <div className="w-full grid md:grid-cols-3 xs:grid-cols-1 md:gap-16 xs:gap-12 md:my-20 xs:my-10 text-center">
                    <div className="flex justify-center items-center flex-col">
                        <img src={forest} alt="forest" className="w-40 my-2" />
                        <h1 className="text-nature md:text-2xl xs:text-xl font-bold my-1">Somos más felices<br /> en la naturaleza.</h1>
                        <p className="md:text-xl xs:text-lg my-1">Al forestar estamos ayudando a hacer más espacio para que todos podamos encontrar tranquilidad.</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img src={planet} alt="planet" className="w-36 my-2" />
                        <h1 className="text-nature md:text-2xl xs:text-xl font-bold my-1">La reforestación mejora<br /> la calidad de aire y suelos.</h1>
                        <p className="md:text-xl xs:text-lg my-1">A medida que los árboles crecen y consumen aire, eliminan los contaminantes nocivos.</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img src={learn} alt="learn" className="w-32 my-2" />
                        <h1 className="text-nature md:text-2xl xs:text-xl font-bold my-1">Aprende de la naturaleza<br /> y cómo se genera la vida.</h1>
                        <p className="md:text-xl xs:text-lg my-1">Recupera la relación que tienes con la naturaleza y descubre como puedes ayudarla en nuestro blog.</p>
                    </div>
                </div>

                <div className="w-full min-h-80 flex justify-center items-center md:flex-row xs:flex-col-reverse my-10">
                    <div className="md:w-1/2 xs:w-full flex justify-end items-start flex-col">
                        <h1 className="text-gray-900 font-sans font-bold md:text-5xl xs:text-4xl tracking-tight">Reforesta tu espacio.</h1>
                        <p className="text-gray-900 md:text-2xl xs:text-xl my-1">Siembra lo que mas te guste en el lugar que quieras,<br />
                                mejora el mundo y aprende de la naturaleza.</p>
                        {/* <Link to="/tienda" className="border-2 border-nature text-nature font-bold py-2 md:px-4 xs:px-3 rounded-xl md:text-2xl xs:text-xl my-2">Yo planto</Link> */}
                    </div>
                    <div className="md:w-1/2 xs:w-full flex justify-center items-center py-6">
                        <img src={HomeUno} alt="uno" className="Forestando Ando" />
                    </div>
                </div>

                <div className="w-full min-h-80 flex justify-center items-center md:flex-row xs:flex-col">
                    <div className="md:w-1/2 xs:w-full  flex justify-center items-center py-6">
                        <img src={HomeDos} alt="Forestando Ando" className="w-full" />
                    </div>
                    <div className="md:w-1/2 xs:w-full  flex justify-end md:items-start xs:items-end md:text-left xs:text-right flex-col md:ml-10 xs:ml-0 my-10">
                        <h1 className="text-gray-900 font-sans font-bold md:text-5xl xs:text-4xl tracking-tight">Transforma tu entorno.</h1>
                        <p className="text-gray-900 md:text-2xl xs:text-xl my-1">Ten una mejor calidad de vida rodeado de naturaleza no importa como sea tu espacio.</p>
                        {/* <Link to="/tienda" className="border-2 border-nature text-nature font-bold py-2 md:px-4 xs:px-3 rounded-xl md:text-2xl xs:text-xl my-2">Yo planto</Link> */}
                    </div>
                </div>

                <div className="w-full min-h-80 flex justify-center items-center md:flex-row xs:flex-col-reverse my-10">
                    <div className="md:w-1/2 xs:w-full  flex justify-end items-start flex-col md:ml-10 xs:ml-0">
                        <h1 className="text-gray-900 font-sans font-bold md:text-5xl xs:text-4xl tracking-tight">Envios Nacionales.</h1>
                        <p className="text-gray-900 md:text-2xl xs:text-xl my-1">¡La mejor experiencia de compra sin moverte de casa! Compra en línea y recibe tu pedido en casa o en el destino que elijas.</p>
                        {/* <Link to="/tienda" className="border-2 border-nature text-nature font-bold py-2 md:px-4 xs:px-3 rounded-xl md:text-2xl xs:text-xl my-2">Yo planto</Link> */}
                    </div>
                    <div className="md:w-1/2 xs:w-full  flex justify-center items-center py-6">
                        <img src={HomeTres} alt="uno" className="w-full" />
                    </div>
                </div>


                <div className="mt-24 flex justify-center items-center flex-col">
                    <p className="md:text-3xl xs:text-2xl font-bold text-center">Siguenos en nuestras redes sociales <br />y aprende como contribuir con esta misión</p>
                    <div className="flex justify-center items-center my-10">
                        <img src={instagram} alt="instagram" className="w-10 mx-4" />
                        <img src={facebook} alt="facebook" className="w-10 mx-4" />
                        <img src={whatsapp} alt="whatsapp" className="w-11 mx-4" />
                    </div>
                </div>
            </div>
        )
    }
}

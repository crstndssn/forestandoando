import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../resources/logo-forestando-color.svg'
import instagram from '../../resources/instagram.svg'
import facebook from '../../resources/facebook.svg'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-between items-center pt-8">
                    <div className="w-1/3">
                        <Link to="/"><img className="w-52" src={logo} alt="Logo"/> </Link>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <Link to="/fundacion" className="text-lg font-bold tracking-tight mx-7">Fundacion</Link>
                        <Link to="/tienda" className="text-lg font-bold tracking-tight mx-7">Tienda</Link>
                        <Link to="/yoplanto" className="text-lg font-bold tracking-tight mx-7">Guias</Link>
                    </div>
                    <div className="w-1/3 flex justify-end items-center">
                        <Link><img className="w-7 mx-7" src={facebook} alt="Facebook" /></Link>
                        <Link><img className="w-7" src={instagram} alt="Instagram" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

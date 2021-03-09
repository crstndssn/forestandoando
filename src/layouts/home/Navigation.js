import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../resources/logo-forestando-color.svg'
// import user from '../../resources/user.svg'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-between items-center pt-8">
                    <div className="w-1/3">
                        <Link to="/"><img className="w-52" src={logo} alt="Logo"/> </Link>
                    </div>
                    <div className="w-1/3 flex justify-end items-center">
                        <Link to="/fundacion" className="text-lg font-bold tracking-tight mx-5">Fundacion</Link>
                        <Link to="/tienda" className="text-lg font-bold tracking-tight mx-5">Tienda</Link>
                        <Link to="/yoplanto" className="text-lg font-bold tracking-tight mx-5">Guias</Link>
                    </div>
                </div>
            </div>
        )
    }
}

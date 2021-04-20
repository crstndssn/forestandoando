import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logoDesktop from '../resources/logo-web-fa.svg'
import logoMobile from '../resources/logo-web-fa.svg'

import admin from '../resources/admin.svg'
import logout from '../resources/logout.svg'
import cart from '../resources/cart.svg'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-between items-center pt-8">
                    <div className="w-1/3 md:block xs:hidden">
                        <Link to="/"><img className="w-16" src={logoDesktop} alt="Logo" /> </Link>
                    </div>
                    <div className="w-auto md:hidden xs:block">
                        <Link to="/"><img className="w-12" src={logoMobile} alt="Logo" /> </Link>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        {/* <Link to="/" className="text-lg font-bold tracking-tight mx-7 md:block xs:hidden">Inicio</Link>
                        <Link to="/tienda" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">Tienda</Link>
                        <Link to="/blog" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">Blog</Link> */}
                    </div>
                    <div className="w-1/4 flex justify-between items-center">
                        <div className="md:w-1/3 xs:w-auto flex justify-end items-center">
                            <Link to="/admin"><img className="md:w-8 xs:w-10" src={admin} alt="cart" /></Link>
                        </div>
                        <div className="md:w-1/3 xs:w-auto flex justify-end items-center">
                            <Link to="/cart"><img className="md:w-8 xs:w-10" src={cart} alt="cart" /></Link>
                        </div>
                        <div className="md:w-1/3 xs:w-auto flex justify-end items-center">
                            <Link to="/"><img className="md:w-8 xs:w-10" src={logout} alt="cart" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

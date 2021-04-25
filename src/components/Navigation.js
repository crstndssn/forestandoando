import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import logoDesktop from '../resources/logo-web-fa.svg'
import logoMobile from '../resources/logo-web-fa.svg'

import porfile from '../resources/user-porfile.svg'
import config from '../resources/admin.svg'
import logout from '../resources/logout.svg'
import cart from '../resources/cart.svg'
import { auth } from '../firebase';


const Navigation = () => {

    const history = useHistory();

    const [user, setUsuario] = useState(null)

    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(true)
                console.log(user.email)
            }
            if (user.email === 'forestandoando@gmail.com' || 'dussan29@gmail.com' || 'oceanforsky1@gmail.com') {
                setAdmin(true)
            }
        })
    })

    const logOut = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/')
    }

    return (
        <div className="container mx-auto relative z-10 flex justify-between items-center pt-5">
            <div className="w-1/3 cursor-pointer">
                <Link to="/"><img className="md:w-16 xs:w-12" src={logoDesktop} alt="Logo" /> </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center">
                {/* <Link to="/" className="text-lg font-bold tracking-tight mx-7 md:block xs:hidden">Inicio</Link>
        <Link to="/tienda" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">Tienda</Link>
        <Link to="/blog" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">Blog</Link> */}
            </div>
            <div className="xs:w-1/3 md:w-1/6 flex justify-between items-center">
                {
                    admin ? (
                        <div className="md:w-1/4 xs:w-auto flex justify-end items-center">
                            <Link to="/admin"><img className="md:w-9 xs:w-8" src={config} alt="admin" /></Link>
                        </div>
                    ) : (
                        <span></span>
                    )
                }

                {/* <div className="md:w-1/3 xs:w-auto flex justify-end items-center">
                    <Link to="/cart"><img className="md:w-8 xs:w-7" src={cart} alt="cart" /></Link>
                </div> */}
                {
                    !user ? (
                        <div className="md:w-1/3 xs:w-auto flex justify-end items-center">
                            <Link to="/login"><img className="md:w-9 xs:w-8" src={porfile} alt="home" /></Link>
                        </div>
                    ) : (
                        <div onClick={logOut} className="md:w-1/3 xs:w-auto flex justify-end items-center cursor-pointer">
                            <img className="md:w-9 xs:w-8" src={logout} alt="home" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navigation

import React, { useEffect, useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { UserIcon } from '@heroicons/react/outline'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { LibraryIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/outline'



import logoDesktop from '../resources/logo-web-fa.svg'
import logoMobile from '../resources/logo-web-fa.svg'

import porfile from '../resources/user-porfile.svg'
import config from '../resources/admin.svg'
import logout from '../resources/logout.svg'
import cart from '../resources/cart.svg'
import { auth } from '../firebase';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Navigation = () => {

    const history = useHistory();

    const [user, setUsuario] = useState(null)

    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(true)
                if (user.email == 'dussan29@gmail.com') {
                    setAdmin(true)
                } else {
                    setAdmin(false)

                }
            } else {
                setUsuario(false)
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
            <div className="w-1/3 md:flex justify-center items-center xs:hidden">
                
                    {/* <Link to="/blog" className="text-lg font-bold tracking-tight mx-7 md:block xs:hidden">blog</Link>
                    <Link to="/biblioteca" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">biblioteca</Link> */}
                    {/* <Link to="/blog" className="text-lg font-bold tracking-tight md:mx-7 xs:mx-2">visitanos</Link>  */}
               
            </div>
            <div className="xs:w-2/3 md:w-1/3 flex justify-end items-center">
                {
                    !user ? (

                        <div className="md:w-1/2 xs:w-auto flex justify-end items-center">
                            <Link className="xs:text-lg md:text-xl font-medium text-white border-2 bg-brand hover:bg-transparent border-brand hover:text-brand transition duration-200 py-1 px-4 rounded-full" to="/login">Ingresar</Link>
                        </div>
                    ) : (
                        <Menu as="div" className="relative inline-block text-left">
                            {({ open }) => (
                                <>
                                    <div>
                                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-full px-4 py-1 border border-brand  bg-brand transition duration-200 hover:bg-white text-white text-base font-medium hover:text-brand focus:outline-none">
                                            Menú
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            static
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-3xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div className="py-1">
                                                {/* <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/porfile"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 m-1 text-sm rounded-full'
                                                            )}
                                                        >
                                                            <div className="flex justify-start items-center">
                                                                <UserIcon className="w-5 mr-2" />
                                                                <p className="text-lg text-medium">Perfil</p>
                                                            </div>

                                                        </Link>
                                                    )}
                                                </Menu.Item> */}
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/blog"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 m-1 text-sm rounded-full'
                                                            )}
                                                        >
                                                            <div className="flex justify-start items-center">
                                                                <BookOpenIcon className="w-5 mr-2" />
                                                                <p className="text-lg text-medium">Blog</p>
                                                            </div>

                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/biblioteca"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 m-1 text-sm rounded-full'
                                                            )}
                                                        >
                                                            <div className="flex justify-start items-center">
                                                                <LibraryIcon className="w-5 mr-2" />
                                                                <p className="text-lg text-medium">Blibioteca</p>
                                                            </div>

                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                {
                                                    admin == true ? (
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/settings"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm m-1 rounded-full'
                                                                    )}
                                                                >
                                                                    <div className="flex justify-start items-center">
                                                                        <AdjustmentsIcon className="w-5 mr-2" />
                                                                        <p className="text-lg text-medium">Opciones</p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    ) : (
                                                        <span></span>
                                                    )
                                                }

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={logOut}
                                                            type="submit"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'w-11/12 block px-4 py-2 text-sm m-1 rounded-full'
                                                            )}
                                                        >
                                                            <div className="flex justify-start items-center">
                                                                <LogoutIcon className="w-5 mr-2" />
                                                                <p className="text-lg text-medium">Salir</p>
                                                            </div>
                                                        </button>
                                                    )}
                                                </Menu.Item>

                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    )
                }

            </div>
        </div>
    )
}

export default Navigation

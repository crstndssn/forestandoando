import React, { useEffect, useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { UserIcon } from '@heroicons/react/outline'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { LibraryIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/outline'
import { CogIcon, PlusCircleIcon, DocumentAddIcon } from '@heroicons/react/outline'



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
    const [photo, setPhoto] = useState('')

    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(true)
                setPhoto(user.photoURL)
                if (user.email == 'forestandoando@gmail.com') {

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
            <div className="lg:w-1/3 md:w-2/3 flex justify-end items-center">
                <div className="w-3/5 xs:hidden md:flex justify-around items-center mr-3">
                    <Link to="/blog" className="flex justify-start items-center text-gray-800 hover:text-brand transition duration-200">
                        <BookOpenIcon className="w-6 mr-1" />
                        <p className="text-xl text-medium">Blog</p>
                    </Link>
                    <Link to="/biblioteca" className="flex justify-start items-center text-gray-800 hover:text-brand transition duration-200">
                        <LibraryIcon className="w-6 mr-1" />
                        <p className="text-xl text-medium">Blibioteca</p>
                    </Link>
                </div>
                <div className="xs:w-full md:w-auto flex justify-end items-center">
                    {
                        !user ? (

                            <div className="md:w-1/2 xs:w-auto flex justify-end items-center">
                                <Link className="xs:text-lg md:text-xl text-white border bg-brand hover:bg-transparent border-brand hover:text-brand transition duration-200 px-4 py-1 rounded-full" to="/login">Ingresar</Link>
                            </div>
                        ) : (
                            <Menu as="div" className="relative inline-block text-left">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <Menu.Button className="inline-flex justify-between items-center w-full rounded-full p-1 border border-brand  bg-brand transition duration-200 hover:bg-white text-white xs:text-lg md:text-xl font-medium hover:text-brand focus:outline-none">
                                                <div className="flex justify-start items-center">
                                                    {
                                                        !photo == true ? (
                                                            <UserIcon className="md:w-5 xs:w-10 mx-2" />
                                                        ) : (
                                                            <img className="w-7 rounded-full mr-2" src={photo} alt="photo" />
                                                        )
                                                    }

                                                </div>

                                                <div className="flex justify-center items-center ml-1 mr-2">
                                                    <p>Menú</p>
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </div>

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
                                                                to="/account"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 m-1 text-sm rounded-full'
                                                                )}
                                                            >
                                                                <div className="flex justify-start items-center">
                                                                    <CogIcon className="w-5 mr-2" />
                                                                    <p className="text-lg text-medium">Cuenta</p>
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
                                                                    'xs:block md:hidden px-4 py-2 m-1 text-sm rounded-full'
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
                                                                    'xs:block px-4 py-2 m-1 text-sm rounded-full md:hidden '
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
                                                                        to="/settings/blog"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 m-1 text-sm rounded-full'
                                                                        )}
                                                                    >
                                                                        <div className="flex justify-start items-center">
                                                                            <DocumentAddIcon className="w-5 mr-2" />
                                                                            <p className="text-lg text-medium">Add Post</p>
                                                                        </div>

                                                                    </Link>
                                                                )}
                                                            </Menu.Item>

                                                        ) : (
                                                            <span></span>
                                                        )
                                                    }

                                                    {
                                                        admin == true ? (
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to="/settings/biblioteca"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 m-1 text-sm rounded-full'
                                                                        )}
                                                                    >
                                                                        <div className="flex justify-start items-center">
                                                                            <PlusCircleIcon className="w-5 mr-2" />
                                                                            <p className="text-lg text-medm">Add Product</p>
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
                                                                    'w-11/12 block px-4 py-2 text-sm m-1 rounded-full focus:outline-none'
                                                                )}
                                                            >
                                                                <div className="flex justify-start items-center">
                                                                    <LogoutIcon className="w-5 mr-2" />
                                                                    <p className="text-lg text-medium">Cerrar Sesión</p>
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

        </div>
    )
}

export default Navigation

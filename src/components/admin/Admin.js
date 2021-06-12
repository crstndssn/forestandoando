import React from 'react'
import { Link } from 'react-router-dom'

import { UserIcon } from '@heroicons/react/outline'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { LibraryIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'

const Admin = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-7 gap-5">
            <Link to="/settings/blog" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <div className="flex justify-center items-center text-brand">
                    <BookOpenIcon className="w-10 mr-2" />
                    <p className="text-4xl font-medium">Blog</p>
                </div>
            </Link>
            <Link to="/settings/biblioteca" className="w-full h-40 bg-leave shadow hover:shadow-lg transition duration-100 rounded-xl flex justify-center items-center">
                <div className="flex justify-center items-center text-brand">
                    <LibraryIcon className="w-10 mr-2" />
                    <p className="text-4xl font-medium">Biblioteca</p>
                </div>
            </Link>
        </div>
    )
}

export default Admin

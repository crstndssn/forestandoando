import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'

const Posts = () => {

    const [postUser, setPostUser] = useState('')

    useEffect(() => {

        const getPost = async () => {
            const { docs } = await store.collection('posts').limit(3).get()
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(newArray)
            console.log(postUser)
        }
        getPost()

    }, [])

    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-3 md:my-7 xs:my-5">
            {
                postUser.length !== 0 ? (
                    postUser.map(item => (
                        <Link to={`/post/${item.id}`} key={item.id}>
                            <div className="shadow hover:shadow-lg transition bg-white rounded-xl">

                                <div className="bg-gray-200 max-h-30 rounded-t-xl overflow-hidden">
                                    <img src={item.imagen} className="w-full" alt="image" />
                                </div>

                                <div className="px-3 py-2">
                                    <div className="w-full flex justify-between items-start flex-col">
                                        <p className="rounded-full text-brand bg-white font-medium">
                                            {item.autor}
                                        </p>
                                        <p className="text-2xl font-semibold text-gray-800 leading-tight">{item.name}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))
                )
                    :
                    (
                        <div className="w-full flex justify-center items-center">
                            <svg class="animate-spin -ml-1 mr-3 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    )
            }


        </div >
    )
}

export default Posts

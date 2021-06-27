import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/solid'

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
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-3 md:my-7 xs:my-10">
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
                        <div>
                            <p>cargando</p>
                        </div >
                    )
            }


        </div >
    )
}

export default Posts

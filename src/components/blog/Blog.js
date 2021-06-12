import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

const Blog = () => {

    const [postUser, setPostUser] = useState('')

    useEffect(() => {
        const getPost = async () => {
            const { docs } = await store.collection('posts').get()

            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(newArray)
            console.log(postUser)
        }
        getPost()
    })

    return (
        <>
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
                                        <div className="w-full flex justify-between items-start">
                                            <p className="text-2xl font-semibold text-gray-800">{item.name}</p>
                                            <p className="border border-brand px-2 rounded-full m-1 text-brand bg-white font-medium">
                                                {item.autor}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        ))
                    )
                        :
                        (
                            <div>
                                <p>Cargando</p>
                            </div >
                        )
                }

            </div >
        </>

    )
}

export default Blog

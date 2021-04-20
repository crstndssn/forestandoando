import React, { useEffect, useState } from 'react'
import { store } from '../firebase'
import { Link } from 'react-router-dom'

import edit from '../resources/edit-product.svg'
import del from '../resources/delete-product.svg'

const Stock = () => {
    const [postUser, setPostUser] = useState('')

    useEffect(() => {

        const getPost = async () => {

            const { docs } = await store.collection('products').get()

            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
            console.log(postUser)

        }
        getPost()

    }, [])

    return (
        <div className="grid md:grid-cols-2 gap-3 mt-8">

            {
                postUser.length !== 0 ? (
                    postUser.map(item => (
                        <Link to={`/product/${item.id}`} key={item.id} className="flex">
                            <div className="flex justify-between items-center shadow hover:shadow-md transition duration-100 rounded-xl bg-leave">
                                <div className="w-1/4 mr-5">
                                    <img className="rounded-xl m-2" src={item.imagen} alt="figure" />
                                </div>
                                <div className="w-2/4 flex justify-center flex-col items-start">
                                    <h2 className="font-serif font-medium text-3xl leading-none">{item.nombre}</h2>
                                    <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">{item.uso}</p>
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    <img src={edit} className="w-12 mx-3" alt="edit" />
                                    <img src={del} className="w-12"  alt="delete" />
                                </div>
                            </div>
                        </Link>
                    ))
                )
                    :
                    (
                        <div>
                            <p>No hay</p>
                        </div>
                    )
            }


            {   /* <Product />
                        <Product />
                        <Product />
                        <Product />
                <AddProduct className="h-full" /> */}
        </div>
    )
}

export default Stock

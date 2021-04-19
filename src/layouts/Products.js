import React, { useEffect, useState } from 'react'
import { store } from '../firebase'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import AddProduct from '../components/AddProduct'

const Products = () => {

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
        <div className="grid md:grid-cols-3 gap-3">

            {
                postUser.length !== 0 ? (
                    postUser.map(item => (
                        <Link to={`/${item.id}`} key={item.id} className="flex">
                            <div className="flex justify-between items-center flex-col shadow rounded bg-leave">
                                <div>
                                    <img className="rounded-t " src={item.imagen} alt="figure" />
                                </div>
                                <div className="w-full p-3 flex justify-between items-start">
                                    <div>
                                        <h2 className="font-serif font-medium text-3xl leading-none">{item.nombre}</h2>
                                        <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">{item.uso}</p>
                                    </div>
                                    <div>
                                        <button className="text-white bg-nature p-3 rounded font-serif font-medium text-xl leading-none mt-2">
                                            {item.precio}</button>
                                    </div>
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

export default Products

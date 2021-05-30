import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

import eye from '../../resources/view-product.svg'
import edit from '../../resources/edit-product.svg'
import del from '../../resources/delete-product.svg'

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

    const deletePoduct = async (id) => {
        try {
            await store.collection('products').doc(id).delete()
            const { docs } = await store.collection('products').orderBy('date', 'desc')
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="container mx-auto grid md:grid-cols-2 gap-3 mt-8">

            {
                postUser.length !== 0 ? (
                    postUser.map(item => (
                        <div to={`/product/${item.id}`} key={item.id} className="flex">
                            <div className="flex justify-between items-center md:flex-row xs:flex-col shadow rounded-xl bg-leave">
                                <div className="md:w-1/2 xs:w-full rounded-xl flex justify-center items-center">
                                    <img className="rounded-xl m-2 overflow-hidden" src={item.imagen} alt="figure" />
                                </div>
                                <div className="md:w-1/2 xs:w-full md:px-7 xs:px-4 h-full flex justify-around md:items-start flex-col">
                                    <div className="flex justify-center flex-col items-start md:mt-0 xs:mt-2">
                                        <h2 className="font-serif font-medium text-3xl leading-none">{item.nombre}</h2>
                                        <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">Cantidad</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-3 xs:my-6 md:my-0">
                                        <Link to={`/product/${item.id}`}><img src={eye} className="w-12 shadow hover:shadow-lg transition duration-100 rounded-full cursor-pointer" alt="edit" /></Link>
                                        <Link to={`/edit/${item.id}`}><img src={edit} className="w-12 shadow hover:shadow-lg transition duration-100 rounded-full cursor-pointer" alt="edit" /></Link>
                                        <img onClick={(id) => { deletePoduct(item.id) }} src={del} className="w-12 shadow hover:shadow-lg transition duration-100 rounded-full cursor-pointer" alt="delete" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
                    :
                    (
                        <div>
                            <p>cargando</p>
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

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'


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
        <>
            {/* <div className="w-full container mx-auto flex justify-center items-center flex-col">
                <h1 className="md:text-5xl xs:text-4xl font-semibold text-brand">Biblioteca</h1>
            </div> */}
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-7 xs:mt-10">
                {
                    postUser.length !== 0 ? (
                        postUser.map(item => (
                            <Link to={`/product/${item.id}`} key={item.id} className="flex">
                                <div className="flex justify-between items-center flex-col shadow hover:shadow-lg transition duration-100 rounded-xl bg-white  ">
                                    <div>
                                        <img className="rounded-t" src={item.imagen} alt="figure" />
                                    </div>
                                    <div className="w-full p-3 flex justify-between items-start">
                                        <div>
                                            <h2 className="font-serif font-medium text-3xl leading-none">{item.nombre}</h2>
                                            <p className="text-gray-400 font-serif font-normal text-xl leading-none my-1">{item.uso}</p>
                                        </div>
                                        {/* <div>
                                        <button className="text-white bg-nature p-3 rounded font-serif font-medium text-xl leading-none mt-2">
                                            save</button>
                                    </div> */}
                                    </div>
                                </div>
                            </Link>
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
        </>

    )
}

export default Products

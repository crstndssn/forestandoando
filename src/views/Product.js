import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../firebase'

import planta from '../resources/planta.jpg'
import sun from '../resources/sun.svg'
import water from '../resources/water.svg'
import wheater from '../resources/wheater.svg'
import share from '../resources/share.svg'

const Product = () => {

    const [product, setProduct] = useState([])

    const { id } = useParams();

    const obternerPost = async () => {



        await store.collection('products').doc(id)
            .get()
            .then((doc) => {
                console.log(doc.data())
                setProduct(doc.data())
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        // .get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         setProduct(doc.data())
        //     });
        // })
        // .catch((error) => {
        //     console.log("Error getting documents: ", error);
        // });

    }



    useEffect(() => {
        obternerPost();
    }, [])


    return (
        <div className="flex justify-center items-center md:flex-row xs:flex-col mt-8 text-gray-800">

            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <img className="rounded-xl" src={product.imagen} alt="figure" />
            </div>

            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <div className="mt-4">
                    <h1 className="md:text-6xl xs:text-3xl font-medium my-1">{product.nombre}</h1>
                    <p className="md:text-xl xs:text-base text-gray-400 my-1">{product.nombreCientifico}</p>
                    <p className="md:text-3xl xs:text-xl font-medium my-1">{product.uso}</p>
                    <p className="md:text-xl xs:text-lg my-1">{product.descripcion}</p>
                </div>

                <div className="w-full flex justify-around mt-3 bg-brand bg-opacity-10 rounded-md py-4">
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-12 md:w-16 mb-2" src={sun} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">{product.sol}</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-8 md:w-10 mb-2" src={water} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">{product.agua}</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="xs:w-7 md:w-9 mb-2" src={wheater} alt="figure" />
                        <p className="text-brand md:text-xl xs:text-lg">{product.temperatura}</p>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center text-center gap-2 mt-5">
                    <p className="w-full bg-brand text-white p-3 text-xl rounded-lg">{product.precio}</p>
                </div>

            </div>

        </div>
    )
}

export default Product

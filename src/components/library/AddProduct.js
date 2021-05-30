import React, { useState } from 'react'
import { auth, store, storage } from '../../firebase'

import planta from '../../resources/planta.jpg'
import sun from '../../resources/sun.svg'
import water from '../../resources/water.svg'
import wheater from '../../resources/wheater.svg'
import share from '../../resources/share.svg'



const AddProduct = () => {

    const [imagen, setImagen] = useState('');
    const [nombre, setNombre] = useState('');
    const [nombreCientifico, setNombreCientifico] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [uso, setUso] = useState('');
    const [luz, setLuz] = useState('');
    const [agua, setAgua] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const [loadImg, setLoadImg] = useState('');

    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');


    const setProduct = async (e) => {

        e.preventDefault()

        if (!imagen.trim()) {
            setError('No tiene imagen')
        }
        if (!nombre.trim()) {
            setError('No tiene nombre')
        }
        if (!nombreCientifico.trim()) {
            setError('No tiene nombre Cientifico')
        }
        if (!descripcion.trim()) {
            setError('No tiene descripción')
        }
        if (!uso.trim()) {
            setError('No tiene su uso')
        }
        if (!luz.trim()) {
            setError('No tiene luz')
        }
        if (!agua.trim()) {
            setError('No tiene luz')
        }
        if (!temperatura.trim()) {
            setError('No tiene temperatura')
        }
        if (!precio.trim()) {
            setError('No tiene precio')
        }

        const product = {
            imagen: imagen,
            nombre: nombre,
            nombreCientifico: nombreCientifico,
            descripcion: descripcion,
            uso: uso,
            luz: luz,
            agua: agua,
            temperatura: temperatura,
            cantidadTotal: cantidadTotal,
            precio: precio
        }

        try {
            await store.collection('products').add(product)
        } catch (e) {
            console.log(e)
        }

        setNombre('')
        setNombreCientifico('')
        setDescripcion('')
        setUso('')
        setLuz('')
        setAgua('')
        setTemperatura('')
        setCantidadTotal('')
        setPrecio('')

    }

    const uploadFile = (e) => {

        let file = e.target.files[0];
        let bucketName = 'products'
        let refStorage = storage.ref(`${bucketName}/${file.name}`)
        let upload = refStorage.put(file)

        upload.on(
            'state_changed',
            snapshot => {
                const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                setLoadImg(porcentaje)
            },
            err => {
                console.log(err)
            },
            () => {
                upload.snapshot.ref
                    .getDownloadURL()
                    .then(url => {
                        setImagen(url)
                        sessionStorage.setItem('imgNewPost', url)
                    })
                    .catch(err => {
                        console.log(`Error obteniendo id ${err}`)
                    })
            }
        )

    }


    return (
        <div className="container mx-auto flex justify-center items-center flex-col mt-10">

            <div className="w-full flex justify-center">
                <h1 className="xs:text-3xl md:text-5xl font-medium text-brand">Añadir producto</h1>
            </div>

            <form onSubmit={setProduct} className="flex justify-center items-center mt-8">

                <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                    {
                        imagen == '' ? (
                            <div>
                                <input
                                    onChange={(e) => { uploadFile(e) }}
                                    name="upload-image"
                                    className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                    type="file" />

                            </div>

                        )
                            :
                            (<div>
                                <img className="w-full" src={imagen} alt="producto-preview" />
                                <input
                                    onChange={(e) => { uploadFile(e) }}
                                    name="upload-image"
                                    className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                    type="file" />
                            </div>
                            )
                    }
                    {
                        loadImg <= 100 ? (
                            <p className="text-brand">cargando {Math.round(loadImg)}%</p>
                        ) : (
                            <span></span>
                        )
                    }
                </div>

                <div className="md:w-1/2 xs:w-full">
                    <div className="mt-4 w-full ">


                        <input
                            value={nombre}
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="w-full bg-organic text-gray-900 py-2 md:text-6xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                            placeholder="Titulo" />

                        <input
                            value={nombreCientifico}
                            onChange={(e) => { setNombreCientifico(e.target.value) }}
                            className="w-full bg-organic text-gray-700 py-4 text-lg focus:outline-none"
                            placeholder="Nombre científico" />

                        <input
                            value={uso}
                            onChange={(e) => { setUso(e.target.value) }}
                            className="w-full bg-organic text-gray-700 md:text-3xl xs:text-xl font-medium my-1 focus:outline-none"
                            placeholder="Interior o exterior"
                        />
                        <textarea
                            value={descripcion}
                            onChange={(e) => { setDescripcion(e.target.value) }}
                            className="w-full bg-leave mt-6 min-h-30 shadow rounded-lg p-4 md:text-xl xs:text-lg my-1 text-gray-800 h-32 focus:outline-none"
                            placeholder="Description">
                        </textarea>
                        
                    </div>

                    <div className="w-full flex justify-around mt-3 bg-brand bg-opacity-10 rounded-md py-4">

                        <div className="flex justify-center items-center flex-col">
                            <img className="xs:w-12 md:w-16 mb-2" src={sun} alt="sun" />
                            <input
                                value={luz}
                                onChange={(e) => { setLuz(e.target.value) }}
                                className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none"
                                placeholder="Clima" />
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <img
                                className="xs:w-8 md:w-10 mb-2"
                                src={water}
                                alt="water" />
                            <input
                                value={agua}
                                onChange={(e) => { setAgua(e.target.value) }}
                                className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none"
                                placeholder="Agua" />
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <img 
                                className="xs:w-7 md:w-9 mb-2" 
                                src={wheater} 
                                alt="wheater" 
                            />
                            <input 
                                value={temperatura} 
                                onChange={(e) => { setTemperatura(e.target.value) }} 
                                className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none" 
                                placeholder="Temperatura" />
                        </div>



                    </div>
                    <div>
                        {/* <Category /> */}
                    </div>
                    <div>
                        <input
                            value={cantidadTotal}
                            onChange={(e) => { setCantidadTotal(e.target.value) }}
                            className="w-full shadow my-3 bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none"
                            placeholder="cantidad"
                            type="number"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center text-center gap-2 mt-5">

                        <div className="w-full text-xl rounded-lg text-center">
                            <input value={precio} onChange={(e) => { setPrecio(e.target.value) }} className="w-full bg-transparent border-2 border-brand text-brand p-3 text-xl rounded-lg text-center placeholder-brand focus:outline-none" placeholder="Precio" />
                        </div>

                    </div>

                    <div class="flex justify-center items-center w-full mt-10">
                        <button action="submit" class="md:w-1/3 xs:w-1/2 bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Publicar</button>
                    </div>

                </div>
                {
                    error ?
                        (
                            <div>
                                <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{error}</p>
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }

            </form>
        </div>
    )
}

export default AddProduct

import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { store, storage } from '../firebase'

import planta from '../resources/planta.jpg'
import sun from '../resources/sun.svg'
import water from '../resources/water.svg'
import wheater from '../resources/wheater.svg'
import share from '../resources/share.svg'

const Product = () => {

    const { id } = useParams();

    const history = useHistory();

    const [product, setProduct] = useState([])

    const [imagen, setImagen] = useState('');
    const [nombre, setNombre] = useState('');
    const [nombreCientifico, setNombreCientifico] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [uso, setUso] = useState('');
    const [luz, setLuz] = useState('');
    const [agua, setAgua] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [precio, setPrecio] = useState('');

    const [newImagen, setNewImagen] = useState('');

    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');


    

    const obternerPost = async () => {

        await store.collection('products').doc(id)
            .get()
            .then((doc) => {
                console.log(doc.data())
                setProduct(doc.data())

                setImagen(product.imagen)
                setNombre(product.nombre)
                setNombreCientifico(product.nombreCientifico)
                setDescripcion(product.descripcion)
                setUso(product.uso)
                setLuz(product.luz)
                setAgua(product.agua)
                setTemperatura(product.temperatura)
                setPrecio(product.precio)
                debugger
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

    const setUpdate = async (e) => {

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
            imagen: newImagen,
            nombre: nombre,
            nombreCientifico: nombreCientifico,
            descripcion: descripcion,
            uso: uso,
            luz: luz,
            agua: agua,
            temperatura: temperatura,
            precio: precio
        }

        try {
            await store.collection('products').doc(id).set(product)
            history.push(`/product/${id}`)
        } catch (e) {
            console.log(e)
        }

        setImagen('')
        setNombre('')
        setNombreCientifico('')
        setDescripcion('')
        setUso('')
        setLuz('')
        setAgua('')
        setTemperatura('')
        setPrecio('')

    }

    const updateFile = (e) => {

        let file = e.target.files[0];
        let bucketName = 'products'
        let refStorage = storage.ref(`${bucketName}/${file.name}`)
        let upload = refStorage.put(file)

        upload.on(
            'state_changed',
            snapshot => {
                const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log(porcentaje)
            },
            err => {
                console.log(err)
            },
            () => {
                upload.snapshot.ref
                    .getDownloadURL()
                    .then(url => {
                        setNewImagen(url)
                        sessionStorage.setItem('imgNewPost', url)
                    })
                    .catch(err => {
                        console.log(`Error obteniendo id ${err}`)
                    })
            }
        )

    }

    return (
        <form onSubmit={setUpdate} className="flex justify-center items-center md:flex-row xs:flex-col mt-8 text-gray-800">

            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <div className="w-full xs:h-60 md:h-80">
                    {
                        imagen ? (
                            <div>
                                <img className="w-full" src={imagen} alt="producto-preview" />
                                <p>{imagen}</p>
                            </div>
                        )
                            :
                            (
                                <div>
                                    <img className="w-full" src={imagen} alt="producto-preview" />
                                    <p>{imagen}</p>
                                </div>
                            )
                    }
                </div>
                <input
                    onChange={(e) => { updateFile(e) }}
                    name="upload-image"
                    className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                    type="file" />
            </div>


            <div className="md:w-1/2 xs:w-full md:p-10 xs:p-0">
                <div className="mt-4">
                    <input
                        value={nombre}
                        onChange={(e) => { setNombre(e.target.value) }}
                        className="w-full bg-organic text-gray-900  md:text-6xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
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
                        <img className="xs:w-12 md:w-16 mb-2"
                            src={sun} alt="sun" />
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
                        <img className="xs:w-7 md:w-9 mb-2" src={wheater} alt="wheater" />
                        <input value={temperatura} onChange={(e) => { setTemperatura(e.target.value) }} className="w-full bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg text-center placeholder-brand focus:outline-none" placeholder="Temp" />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center text-center gap-2 mt-5">
                    <input value={precio} onChange={(e) => { setPrecio(e.target.value) }} className="w-full bg-transparent border-2 border-brand text-brand p-3 text-xl rounded-lg text-center placeholder-brand focus:outline-none" placeholder="Precio" />
                </div>

                <div class="flex justify-center items-center w-full mt-10">
                    <button action="submit" class="md:w-1/3 xs:w-1/2 bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Actualizar</button>
                </div>
            </div>

        </form>

    )
}

export default Product
import React, { useState, useEffect, Fragment } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { store, storage } from '../../firebase'
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";


import planta from '../../resources/planta.jpg'
import sun from '../../resources/sun.svg'
import water from '../../resources/water.svg'
import wheater from '../../resources/wheater.svg'
import share from '../../resources/share.svg'

const categorias = [
    { id: 1, name: 'Flores', unavailable: false },
    { id: 2, name: 'Follaje', unavailable: false },
    { id: 3, name: 'Suculentas', unavailable: false },
    { id: 4, name: 'Cactus', unavailable: false },
    { id: 5, name: 'Palmas', unavailable: false },
    { id: 6, name: 'Accesorios', unavailable: false }
];


const Product = () => {

    const { id } = useParams();

    const history = useHistory();

    const [product, setProduct] = useState([])

    const [imagen, setImagen] = useState('');
    const [imagenStatus, setImagenStatus] = useState(null);

    const [nombre, setNombre] = useState(''); 
    const [nombreCientifico, setNombreCientifico] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [uso, setUso] = useState('');
    const [luz, setLuz] = useState('');
    const [agua, setAgua] = useState('');
    const [temperatura, setTemperatura] = useState('');

    const [category, setCategory] = useState(categorias[0]);

    const [precio, setPrecio] = useState('');


    const [loadImg, setLoadImg] = useState('');

    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');

    const [input, setInput] = useState({})


    const handleInputChange = (e) => setInput({
        nombreCientifico: product.nombreCientifico
    })


    useEffect(async () => {

        await store.collection('products').doc(id)
            .get()
            .then((doc) => {
                console.log(doc.data())
                const {
                    imagen,
                    nombre,
                    nombreCientifico,
                    descripcion,
                    uso,
                    luz,
                    agua,
                    temperatura,
                    categoria,
                    precio
                } = doc.data()

                setProduct(doc.data())

                setImagen(imagen)
                setNombre(nombre)
                setNombreCientifico(nombreCientifico)
                setDescripcion(descripcion)
                setUso(uso)
                setLuz(luz)
                setAgua(agua)
                setTemperatura(temperatura)
                // setCategory(categoria[1])
                setPrecio(precio)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }, [])


    const setUpdate = async (e) => {

        e.preventDefault()

        if (!imagen.trim()) {
            setError('No tiene imagen')
            setImagenStatus(true)
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
            categoria: category,
            precio: precio
        }

        try {
            await store.collection('products').doc(id).set(product)
            history.push(`/product/${id}`)
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
        <form onSubmit={setUpdate} className="w-1/2 container mx-auto flex justify-center items-center flex-col mt-8 text-gray-800">

            {/* EDITAR IMAGEN */}
            <div className="w-full md:p-10 xs:p-0">
                {
                    imagenStatus == false ? (
                        <div>
                            <p>No hay imagen</p>
                            <input
                                onChange={(e) => { updateFile(e) }}
                                name="upload-image"
                                className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                type="file" />

                        </div>

                    )
                        :
                        (
                        <div>
                            <img className="w-full rounded-xl" src={imagen} alt="imagen-2" />
                            <input
                                onChange={(e) => { updateFile(e) }}
                                name="upload-image"
                                className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                type="file" />
                        </div>
                        )
                }
                {
                    loadImg > 0 ? (
                        <p className="text-brand">cargando {Math.round(loadImg)}%</p>
                    ) : (
                        <span></span>
                    )
                }
            </div>

            {/* EDITAR DATOS PRINCIPALES */}
            <div className="w-full md:px-10 xs:px-0">
                <div>
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
                        className="w-full bg-leave mt-6 h-40 shadow rounded-lg p-4 md:text-xl xs:text-lg my-1 text-gray-800 focus:outline-none"
                        placeholder="Description">
                    </textarea>
                </div>

                <div className="w-full flex justify-around mt-3 gap-5 flex-col">

                    {/* DATOS SOL EDITAR */}
                    <div className="w-full flex justify-around items-center bg-brand bg-opacity-10 rounded-md py-5">
                        <div className="w-1/4 flex justify-center items-center">
                            <img
                                className="xs:w-12 md:w-16 mb-2"
                                src={sun}
                                alt="sun"
                            />
                        </div>
                        <div className="w-3/4 flex justify-center items-center pr-5">
                            <textarea
                                value={luz}
                                onChange={(e) => { setLuz(e.target.value) }}
                                className="w-full h-32 bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg placeholder-brand focus:outline-none"
                                placeholder="Clima" >
                            </textarea>
                        </div>
                    </div>

                    {/* DATOS AGUA EDITAR */}
                    <div className="w-full flex justify-around items-center bg-brand bg-opacity-10 rounded-md py-5">
                        <div className="w-1/4 flex justify-center items-center">
                            <img
                                className="xs:w-8 md:w-10 mb-2"
                                src={water}
                                alt="water"
                            />
                        </div>
                        <div className="w-3/4 flex justify-center items-center pr-5">
                            <textarea
                                value={agua}
                                onChange={(e) => { setAgua(e.target.value) }}
                                className="w-full h-32 bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg placeholder-brand focus:outline-none"
                                placeholder="Agua" >
                            </textarea>
                        </div>
                    </div>

                    {/* DATOS TEMPERATURA EDITAR */}
                    <div className="w-full flex justify-around items-center bg-brand bg-opacity-10 rounded-md py-5">
                        <div className="w-1/4 flex justify-center items-center">
                            <img
                                className="xs:w-7 md:w-9 mb-2"
                                src={wheater}
                                alt="wheater"
                            />
                        </div>
                        <div className="w-3/4 flex justify-center items-center pr-5">
                            <textarea
                                value={temperatura}
                                onChange={(e) => { setTemperatura(e.target.value) }}
                                className="w-full h-32 bg-transparent py-2 rounded text-brand md:text-xl xs:text-lg placeholder-brand focus:outline-none"
                                placeholder="Temperatura" >
                            </textarea>
                        </div>
                    </div>

                </div>

                {/* CONFIRMACION SET DATA */}
                <div className="w-full flex justify-center items-center mt-5">
                    <div class="flex justify-center items-center w-full mt-10 m-3">
                        <Link to="/stock" class="w-full text-center bg-transparent border-2 border-brand text-brand text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Cancelar</Link>
                    </div>
                    <div class="flex justify-center items-center w-full mt-10 m-3">
                        <button action="submit" class="w-full bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Actualizar</button>
                    </div>
                </div>


            </div>

        </form>

    )
}

export default Product
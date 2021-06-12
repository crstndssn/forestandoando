import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { store, storage } from '../../firebase'

import { Editor } from '@tinymce/tinymce-react';

const EditPost = () => {

    const { id } = useParams();

    const history = useHistory();

    const [post, setPost] = useState([])

    const [imagen, setImagen] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');

    const [newImagen, setNewImagen] = useState('');
    const [loadImg, setLoadImg] = useState('');


    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');

    useEffect(async () => {

        await store.collection('posts').doc(id)
            .get()
            .then((doc) => {
                console.log(doc.data())
                const {
                    imagen,
                    name,
                    description,
                    content,
                    autor,
                    date
                } = doc.data()

                setPost(doc.data())

                setImagen(imagen)
                setName(name)
                setDescription(description)
                setContent(content)
                setAutor(autor)
                setDate(date)

            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })

    }, [])

    const setUpdate = async (e) => {

        e.preventDefault()

        // if (!imagen.trim()) {
        //     setError('No tiene imagen')
        // }
        // if (!name.trim()) {
        //     setError("No tiene nombre")
        // }
        // if (!description.trim()) {
        //     setError("No tiene nombre")
        // }
        // if (!content.trim()) {
        //     setError("No tiene nombre")
        // }
        // if (!autor.trim()) {
        //     setError("No tiene nombre")
        // }

        const post = {
            imagen: imagen,
            name: name,
            description: description,
            content: content,
            autor: autor,
            date: date
        }

        try {
            await store.collection('posts').doc(id).set(post)
            history.push(`/post/${id}`)
        } catch (e) {
            console.log(e)
            debugger
        }

        setName('')
        setDescription('')
        setContent('')
        setAutor('')
        setDate('')

    }

    const updateFile = (e) => {
        let file = e.target.files[0];
        let bucketName = 'posts'
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
                        setNewImagen(url)
                        sessionStorage.setItem('imgNewPost', url)
                    })
                    .catch(err => {
                        console.log(`Error obteniendo id ${err}`)
                    })
            }
        )
    }


    const editorRef = useRef(null)

    return (
        <form onSubmit={setUpdate} className="w-full container mx-auto flex justify-center items-center flex-col mt-8 text-gray-800">


            <div className="w-full flex justify-center">
                <h1 className="xs:text-3xl md:text-5xl font-medium text-brand">Edit post</h1>
            </div>

            <div class="md:w-2/3 xd:w-full mt-10 flex justify-center items-start flex-col">
                <input
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    className="w-full bg-organic text-gray-900  md:text-6xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                    placeholder="Title" />
                <div className="flex justify-center items-center md:text-xl xs:text-lg my-2">
                    <p className="mr-2">
                        por
                    </p>
                    <input
                        value={autor}
                        onChange={(e) => { setAutor(e.target.value) }}
                        className="bg-organic text-gray-700  font-medium my-1 focus:outline-none"
                        placeholder="autor's name"
                    />
                </div>
            </div>

            <div className="md:w-2/3 xd:w-full mt-7">
                {
                    imagen == '' ? (
                        <div>
                            <p>No hay imagen</p>
                            <input
                                onChange={(e) => { updateFile(e) }}
                                name="upload-image"
                                className="bg-organic text-gray-900 py-2 md:text-xl xs:text-base font-medium my-1 mt-2 focus:outline-none"
                                type="file" />

                        </div>

                    )
                        :
                        (<div>
                            <img className="w-full rounded-lg" src={imagen} alt="imagen-2" />
                        </div>
                        )
                }
                {
                    newImagen == true ? (
                        <div>
                        </div>

                    )
                        :
                        (<div>
                            {/* <img className="w-full" src={newImagen} alt="imagen-nueva" /> */}
                            <input
                                onChange={(e) => { updateFile(e) }}
                                name="upload-image"
                                className="bg-organic text-gray-900 py-2 md:text-xl xs:text-base font-medium my-1 mt-2 focus:outline-none"
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

            <div className="md:w-2/3 xd:w-full mt-10">
                <Editor
                    value={content}
                    apiKey="mymbkaj0hl9txwpvhiv5n58z1m0s8n5jf1qj58xluzhi15ow"
                    onEditorChange={(newValue) => {
                        setContent(newValue);
                    }}
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | link',
                    }}
                />
            </div>

            <div className="md:w-2/3 xd:w-full mt-10 flex justify-center items-center">
                <div class="flex justify-center items-center w-full m-3">
                    <Link to={`/post/${id}`} class="w-full text-center bg-transparent border border-brand text-brand text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Cancelar</Link>
                </div>
                <div class="flex justify-center items-center w-full m-3">
                    <button action="submit" class="w-full bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Actualizar</button>
                </div>
            </div>

        </form >

    )

}

export default EditPost

import React, { useState } from 'react'
import { auth, store, storage } from '../../firebase'

const AddPost = () => {

    const [imagen, setImagen] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');

    const [loadImagen, setLoadImagen] = useState('');

    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');

    const setPost = async (e) => {

        e.preventDefault()

        if (!imagen.trim()) {
            setError('No tiene imagen')
        }
        if (!name.trim()) {
            setError()
        }
        if (!description.trim()) {
            setError()
        }
        if (!content.trim()) {
            setError()
        }
        if (!autor.trim()) {
            setError()
        }

        const post = {
            imagen: imagen,
            name: name,
            description: description,
            content: content,
            autor: autor,
            date: date
        }

        try {
            await store.collection('posts').add(post)
        } catch (e) {
            console.log(e)        
            debugger
        }

        setImagen('')
        setName('')
        setDescription('')
        setContent('')
        setAutor('')
        setDate('')



    }

    const uploadFile = (e) => {

        let file = e.target.files[0];
        let bucketName = 'posts';
        let refStorage = storage.ref(`${bucketName}/${file.name}`)
        let upload = refStorage.put(file)

        upload.on(
            'state_changed'
            ,
            snapshot => {
                const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                // setloadImg(porcentaje)
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
                <h1 className="xs:text-3xl md:text-5xl font-medium text-brand">Add post</h1>
            </div>

            <form onSubmit={setPost} className="flex justify-center items-center mt-8">

                <div className="md:w-full xs:w-full md::p-10 xs:p-0">
                    {
                        imagen == '' ? (
                            <div>
                                <input
                                    onChange={(e) => { uploadFile(e) }}
                                    name="upload-image"
                                    className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                    type="file"
                                />
                            </div>
                        )
                        :
                        (
                            <div>
                                <img className="w-full" src={imagen} alt="blog" />
                                <input
                                    onChange={(e) => { uploadFile(e) }}
                                    name="upload-image"
                                    className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                                    type="file" 
                                />
                            </div>
                        )
                    }
                </div>

                <div className="w-full md:px-10 xs:px-0">
                    <div>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className="w-full bg-organic text-gray-900  md:text-6xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                            placeholder="Title" />
                        <input
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            className="w-full bg-organic text-gray-700 py-4 text-lg focus:outline-none"
                            placeholder="Description" />

                        <input
                            value={autor}
                            onChange={(e) => { setAutor(e.target.value) }}
                            className="w-full bg-organic text-gray-700 md:text-3xl xs:text-xl font-medium my-1 focus:outline-none"
                            placeholder="por:"
                        />
                        <textarea
                            value={content}
                            onChange={(e) => { setContent(e.target.value) }}
                            className="w-full bg-leave mt-6 h-40 shadow rounded-lg p-4 md:text-xl xs:text-lg my-1 text-gray-800 focus:outline-none"
                            placeholder="Type here...">
                        </textarea>
                    </div>

                    <div class="flex justify-center items-center w-full mt-10">
                        <button action="submit" class="md:w-1/3 xs:w-1/2 bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Publicar</button>
                    </div>

                </div>


            </form>

        </div>
    )
}

export default AddPost

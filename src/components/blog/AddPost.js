import React, { useState, useRef } from 'react'
import { auth, store, storage } from '../../firebase'

import { Editor } from '@tinymce/tinymce-react';

const AddPost = () => {

    const [imagen, setImagen] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState([]);
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');

    const [loadImagen, setLoadImagen] = useState('');

    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');

    const setPost = async (e) => {

        e.preventDefault()

        console.log(content)
        debugger

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



    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setContent(editorRef.current.getContent())
        }
    };

    return (
        <div className="container mx-auto flex justify-center items-center flex-col mt-10">

            <div className="w-full flex justify-center">
                <h1 className="xs:text-3xl md:text-5xl font-medium text-brand">Add post</h1>
            </div>

            <form onSubmit={setPost} className="flex justify-center items-center flex-col mt-8">

                <textarea
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    className="w-full bg-organic text-gray-900  md:text-6xl xs:text-3xl font-medium my-1 mt-2 px-10 focus:outline-none"
                    placeholder="Title">
                </textarea>

                <div className="md:w-full xs:w-full md:p-10 xs:p-0">
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
                            value={autor}
                            onChange={(e) => { setAutor(e.target.value) }}
                            className="w-full bg-organic text-gray-700 md:text-3xl xs:text-xl font-medium mb-10 focus:outline-none"
                            placeholder="por:"
                        />
                        <Editor
                            apiKey="mymbkaj0hl9txwpvhiv5n58z1m0s8n5jf1qj58xluzhi15ow"
                            onChange={log}
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

                    <div class="flex justify-center items-center w-full mt-10">
                        <button action="submit" class="md:w-1/3 xs:w-1/2 bg-brand text-white text-semibold my-4 p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Publicar</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddPost

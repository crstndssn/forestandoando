import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../firebase'

import { Helmet } from 'react-helmet'


const Post = () => {

    const [post, setPost] = useState([])

    const { id } = useParams();

    const obtenerPost = async () => {
        await store.collection('posts').doc(id)
            .get()
            .then((doc) => {
                console.log(doc.data())
                setPost(doc.data())
            })
            .catch((error) => {
                console.log('error getting documents: ', error);
            })
    }

    useEffect(() => {
        obtenerPost();
    }, [])

    const createMarkup = () => {
        return { __html: post.content }
    }

    return (
        <div>
            <Helmet htmlAttributes>
                <title>{post.name}</title>
                <meta name="title" content={post.name}></meta>
                <meta name="description" content="description"></meta>

                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://forestandoando.com/"></meta>
                <meta property="og:title" content={post.name}></meta>
                <meta property="og:description" content="Siembra vida y aprende de la naturaleza"></meta>
                <meta property="og:image" content={post.imagen}></meta>

            </Helmet>
            <div className="w-full container mx-auto flex justify-center items-center flex-col">
                <div className="md:w-2/3 xd:w-full mt-10">
                    <h1 className="md:text-6xl xs:text-4xl my-2 font-medium">{post.name}</h1>
                    <div className="md:text-xl xs:text-lg my-2">
                        <p className="text-gray-600 text-lg">por <span className="text-gray-800 font-medium">{post.autor}</span></p>
                    </div>
                    <p className="md:text-2xl xs:text-xl my-2">{post.description}</p>
                    <img src={post.imagen} alt="imagen" className="mt-5 rounded-lg" />
                    <div className="mt-10">
                        <div className="md:text-xl xs:text-lg" dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

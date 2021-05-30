import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../firebase'


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


    return (
        <div className="w-full container mx-auto flex justify-center items-center flex-col">
            <div className="w-2/3 mt-10">
                <h1 className="md:text-6xl xs:text-lg my-2 font-medium">{post.name}</h1>
                <div className="md:text-xl xs:text-lg my-2">
                    <p className="text-gray-600">por <span className="text-gray-800 font-medium">{post.autor}</span></p> 
                </div>
                <p className="md:text-2xl xs:text-lg my-2">{post.description}</p>
                <img src={post.imagen} alt="imagen" className="mt-5 rounded-xl" />
                <div className="my-">
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Post

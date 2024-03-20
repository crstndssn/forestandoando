import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet';

// Components
import Header from '../components/home/Header';
import Products from '../components/library/Products';
import Posts from '../components/blog/Posts';
import Pricing from '../components/pricing/Pricing';

export default class Store extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Forestando Ando</title>
                    <meta 
                        name="description"
                        content="Siembra vida y aprende de la naturaleza"
                    />
                </Helmet>
                
                <div>
                    <Header />
                </div>

                <div className="bg-brand md:pt-10 xs:py-2">
                    <div className="container mx-auto flex justify-start items-start flex-col">
                        <h1 className="md:text-5xl text-4xl font-semibold mt-10 text-white">Blog</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <Posts />
                    </div>
                    <div className="w-full flex justify-center items-center mb-5 mt-3">
                        <Link className="text-white hover:text-brand bg-transparent hover:bg-white border border-white py-1 px-4 md:text-2xl xs:text-xl rounded-full text-medium transition duration-200" to="/blog">ver más</Link>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="container mx-auto flex justify-start items-start flex-col">
                        <h1 className="md:text-5xl text-4xl font-semibold mt-10 text-brand">Biblioteca</h1>
                    </div>
                        <Products />
                    <div className="w-full flex justify-center items-center my-10">
                        <Link className="text-brand hover:text-white bg-transparent hover:bg-brand border border-brand py-1 px-4 text-2xl rounded-full text-medium transition duration-200" to="/biblioteca">Ver más</Link>
                    </div>
                </div>
                {/* <div className="mt-16">
                    <div className="container mx-auto flex justify-start items-start flex-col">
                        <h1 className="md:text-5xl text-4xl font-semibold mt-10 mb-5 text-brand">Precios</h1>
                    </div>
                    <Pricing />
                </div> */}
            </div>

        )
    }
}

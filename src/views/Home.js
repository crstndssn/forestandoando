import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="w-2/3 min-h-80 flex justify-end items-start flex-col">
                <h1 className="text-gray-900 font-sans font-bold text-5xl tracking-tight">Reforesta tu espacio</h1>
                <p className="text-gray-900 font-serif text-2xl my-1">Siembra lo que mas te guste en el lugar que quieras,<br/>
                 mejora el mundo y aprende de las naturaleza.</p>
                <Link to="/yoplanto" className="border-2 border-nature text-nature font-bold py-1 px-3 rounded-xl text-xl my-2">Yo planto</Link>
            </div>
        )
    }
}

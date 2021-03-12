import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="w-full flex justify-between items-center md:flex-row pt-24 xs:flex-col md:pb-24 xs:pb-12">
                <div className="flex justify-center items-center md:flex-row xs:flex-col ">
                    <p className="text-gray-300 text-lg my-2">Terminos y Condiciones</p>
                    <p className="text-gray-300 text-lg mx-10">Reporta un error</p>
                </div>
                <p className="text-gray-300 text-lg md:my-0 xs:my-9">Forestando Ando &copy; 2021</p>
            </div>
        )
    }
}

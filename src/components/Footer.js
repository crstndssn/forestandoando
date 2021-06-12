import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Instagram from '../resources/instagram.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className="container mx-auto min-h-20 w-full  mt-20 mb-10">
                <div className="flex justify-center items-center xs:flex-col md:flex-row" >
                    <a target="_blank" href="https://www.instagram.com/forestandoando/" className="flex justify-center items-center text-brand md:text-2xl xs:text-xl mb-7">
                        <img src={Instagram} alt="instagram" className="md:w-6 xs:w-5 text-brand mx-1" />
                        Instagram
                    </a>
                </div>
                <div className="flex justify-between items-center md:flex-row xs:flex-col">
                    {/* <div className="flex justify-center items-center xs:flex-col md:flex-row" >
                        <Link to="/legal" className="text-gray-200 text-lg my-2 hover:underline transition duration-300">Política de Privacidad</Link>
                    </div> */}
                    <p className="text-gray-200 text-lg md:my-0 md:mt-3 xs:mb-7 xs:mt-3">Forestando Ando &copy; 2021</p>
                </div>

            </div>
        )
    }
}

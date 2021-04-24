import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { app } from '../firebase';

const Login = () => {

    const history = useHistory();


    const [msgerror, setMsgError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        await app.auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(result => {
                console.log(result);
                history.push(`/`);
            })
            .catch(error => {

                console.log(error)

                if (error.code === 'auth/invalid-email') {
                    setMsgError('Email incorrecto')
                }
                if (error.code === 'auth/user-not-found') {
                    setMsgError('Usuario no encontrado')
                }
                if (error.code === 'auth/wrong-password') {
                    setMsgError('Contraseña equivocada')
                }
            })
    }

    return (
        <div className="container mx-auto min-h-70 flex justify-center items-center">
            <div className="flex justify-center items-center">
                <div className="container mx-auto flex justify-center items-center flex-col">
                    <div className="lg:w-2/3 md:w-2/3 xs:w-full flex justify-center items-center flex-col">
                        <h3 className="text-brand font-medium text-4xl mt-2 mb-4"><span className="text-nature">#forestando</span><span className="text-ando">ando</span></h3>
                        <form id="form-login" onSubmit={handleSubmit}>
                            <input
                                name="email"
                                type="email"
                                id="login-email"
                                className="text-brand shadow bg-soft text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Email"
                                autocomplete="off"
                            />
                            <input name="password" type="password" id="login-password"
                                className="text-brand shadow bg-soft text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Contraseña" />
                            <button type="submit"
                                className="hover:shadow transition duration-300 w-full border-2 bg-brand hover:bg-transparent border-brand text-white hover:text-brand my-2 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Ingresar</button>
                        </form>
                        <Link to="/reset" id="forget-password" class="transition duration-300 hover:underline font-xl flex justify-center w-full my-5 text-gray-500">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    {
                        msgerror != null ?
                            (
                                <div>
                                    <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{msgerror}</p>
                                </div>
                            )
                            :
                            (
                                <span>

                                </span>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;

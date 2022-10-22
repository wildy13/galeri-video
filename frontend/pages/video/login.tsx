import Link from "next/link";
import Head from 'next/head';
import FooterVideo from '../../components/Footer-Video'

/* for useState */
const defaultFormData = {
    username: "",
    password: "",
}

import styles from '../../styles/Home.module.css';
import axios from "axios";
import { useState } from "react";
import Router from "next/router";

export default function Login() {
    const [state, setState] = useState(defaultFormData);
    const [msg, setMsg] = useState('');
    const [token, setToken] = useState('');
    const { username, password} = state; 

    const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
          }));
    }
    
    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('http://localhost:5001/api/auth/login', state)
        .then(response => {
            setToken(response.data.token);
            Router.push('/video/tube')
        }).catch(err => {
            setMsg(err.response.data)
        })
        setState(defaultFormData);
    }
    return (

        <div className={styles.container}>
             <Head>
                <title>Video Gallery Video</title>
                <link rel="icon" href="/labtech.png" />
            </Head>
            <div className="relative flex flex-col items-center justify-center min-h-screen bg-orange-100 bg-cover min-w-screen">
                <div className="w-full max-w-md  p-14 z-50 m-auto ml-64  mr-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h1 className="text-2xl p-1 font-semibold text-center text-gray-600 dark:text-white">Labtech Video Gallery</h1>
                    <p className="text-sm  text-center text-gray-600 font-normal dark:text-gray-400">Hey, enter your username and
                        <br />your password</p>
                    <form className="mt-6" onSubmit={ login }>
                        <p className="text-center">{ msg }</p>
                        <div className="">
                            <input id="username" type="text" className="block w-full px-5 py-2 mt-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Username" 
                            value={ username } onChange={handleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                            </div>
                            <input id="password" type="password" className="block w-full px-4 py-2 mt-0 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" 
                            value={password} onChange={handleChange}
                            />

                        </div>
                        <p className="mt-2 p-2 text-xs font-semibold  text-gray-600 dark:text-gray-400">
                            <Link href="/video/tube">Forget Password?</Link>
                            </p>


                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white font-semibold transition-colors duration-300 transform bg-sky-800 rounded-md hover:bg-orange-300 focus:outline-none focus:bg-orange-300">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-2/5 border-b dark:border-gray-600 lg:w-1/4 md:w-1/4"></span>

                        <Link href="/video/dashboard">
                            <a className="text-xs md:text-xs text-center text-gray-600 font-bold dark:text-gray-400">Labtech Gallery Video</a>
                        </Link>
                      <span className="w-3/5 border-b dark:border-gray-400 lg:w-1/4 md:w-1/4"></span>
                    </div>
                    <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="/video/register" className="font-medium text-gray-700 dark:text-gray-200 ">Request Now</a></p>
                </div>
                <img src="/bg.gif"
                    className="absolute  z-10 lg:ml-[750px]  mt-30 object-cover lg:w-3/6  md:w-0  " />
                    <img src="https://www.linkpicture.com/q/pana100.png"
                    className="absolute  z-10 lg:w-0 mt-40 object-cover   md:w-5/5  " />
            </div>
            <FooterVideo />
        </div>

        
    );
}

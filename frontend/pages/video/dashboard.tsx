import Link from "next/link";
import Head from 'next/head';
import FooterVideo from '../../components/Footer-Video'

import styles from '../../styles/Home.module.css';
export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Video Gallery Video</title>
                <link rel="icon" href="/labtech.png" />
            </Head>
            <div className="relative flex flex-col items-center justify-center min-h-screen bg-orange-100 bg-cover min-w-screen">
                <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
                    <div
                        className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">

                        <div className="relative z-20 text-5xl font-extrabold leading-none text-orange-400 xl:text-6xl sm:text-center lg:text-left">
                            <Link href="/">
                                <h2>LABTECH<br className="md:hidden lg:block" /></h2></Link>
                            <span className="text-sky-800">VIDEO GALLERY</span>
                            <p className=" relative z-20 block mt-6 text-base  text-gray-600 xl:text-justify sm:text-center lg:text-justify">
                                Labtech video gallery is a video sharing service that allows users to watch videos posted by other users and upload videos of their own.  Videos that have been uploaded to Labtech  video gallery may appear on the Labtech video gallery website and can also be posted on other websites, though the files are hosted on the Labtech server.
                            </p>
                        </div>

                        <div className="relative flex mt-4">
                            <div className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent rounded-full shadow hover:bg-sky-800 hover:text-white-400 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">
                                <Link href="/video/login"
                                ><h2>Get Started</h2></Link>
                            </div>
                            <div className="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-sky-800 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-orange-500 focus:outline-none md:py-4 md:text-lg xl:text-xl">
                                <Link href="/">
                                    <svg className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                            clip="evenodd"></path>
                                    </svg>
                                </Link>
                                <p className="text-black-500">How It Works</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0">
                        <div className="absolute top-0 left-4 w-11/12 -mt-20 opacity-50">
                            <svg className="w-full h-full ml-4 text-sky-800" viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                    d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z"
                                    transform="translate(100 100)" />
                            </svg>
                        </div>
                        <div className="ml-10 relative overflow-hidden rounded-md shadow-3xl  cursor-pointer group">
                            <iframe width="550" height="315" src="https://www.youtube.com/embed/VSx2KMhXzM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <FooterVideo />
        </div>

    );
}
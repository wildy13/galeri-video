import Link from "next/link";
import Head from 'next/head';
import FooterVideo from '../../components/Footer-Video'

import styles from '../../styles/Home.module.css';
export default function Tube() {
    return (
        <div className="scrollbar-hide">
            <Head>
                <title>Video Gallery Video</title>
                <link rel="icon" href="/labtech.png" />
            </Head>
            <section className="bg-gray-900 min-h-screen dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto ">
                    <div className="flex items-center justify-between">
                        <Link href="/video/dashboard">
                            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Video <span className="text-orange-400">Gallery tube</span></h1>
                        </Link>
                        <form className="group relative">
                            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-orange-400" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                            </svg>
                            <input className="focus:ring-1 bg-transparent focus:ring-orange-400 focus:outline-none appearance-none w-full text-sm leading-6 text-sky-900 placeholder-white rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search projects..." />
                        </form>
                    </div>

                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    <div className="container mx-auto overflow-hidden overflow-y-auto h-[1400px]">
                        <div className="grid grid-cols-4 gap-8  md:grid-cols-2 xl:grid-cols-3 ">
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/H28zzgB4Me4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Computer Modem
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/ftV_dkj30rE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Fire Alarm Trainer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>

                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/F0YECH2Bi_4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Automotive
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/H28zzgB4Me4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Computer Modem
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/ftV_dkj30rE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Fire Alarm Trainer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>

                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/H28zzgB4Me4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Computer Modem
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/ftV_dkj30rE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Fire Alarm Trainer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>

                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/ZUmwJDWvtm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Split Air Conditioning Trainer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <iframe className="rounded-lg  lg:w-full md:w-80 " width="470" height="320" src="https://www.youtube.com/embed/4IunPX7IJtI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Training Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Auto Air Conditioning Trainer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <iframe className="rounded-lg lg:w-full md:w-80" width="470" height="320" src="https://www.youtube.com/embed/T9UaOXfilFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <div className="mt-8">
                                    <span className="text-orange-400 uppercase">Trainig Video</span>

                                    <h1 className="mt-4 text-xl font-semibold text-white hover:text-orange-400">
                                        Monochrome Laser Jet Printer
                                    </h1>

                                    <p className="mt-2 text-white dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                        recusandae nulla veritatis id tempore sapiente
                                    </p>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>


                                            <p className="text-sm text-white dark:text-gray-400">February 1, 2022</p>
                                        </div>

                                        <Link href="#"><a className="inline-block text-white  hover:text-blue-400">Read more</a></Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <hr className="my-10  relative border-gray-200 dark:border-gray-700" />

                </div>

            </section>

            <FooterVideo />
        </div>
    );
}
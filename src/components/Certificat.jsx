import React from 'react';
import DevOps from '../assets/Devops.png';
import Spring from '../assets/Spring.png';
import Sales from '../assets/Sales.png';
import Bootstrap from '../assets/Bootstrap.png';
import Agile from '../assets/Agile.png';
import Cloud from '../assets/Cloud.png';

const Works = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Certificat
                    </p>
                    <p className='py-6 text-2xl'>Découvrez quelques-uns de mes certificats les plus récents</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Spring})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Spring - Ecosystem and Core
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='https://coursera.org/verify/NS43FJAJAB'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Verifiez
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Bootstrap})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                &nbsp; Front-End Web UI Frameworks &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and Tools: Bootstrap 4
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='https://coursera.org/verify/E8NYSKRA'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Verifiez
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Sales})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Sales and CRM Overview
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Cloud})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Cloud
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computing
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='https://coursera.org/verify/JCBQXGGZQ'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Verifiez
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Agile})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Introduction to Agile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development and Scrum
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='https://coursera.org/verify/RQ29EYVYP'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Visitez
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${DevOps})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Introduction to DevOps
                            </span>
                            <p className='text-center'>Visitez le lien de la certif ↓</p>
                            <div className='pt-8 text-center'>
                                <a href='https://coursera.org/verify/KN2EW4S4BD '>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Verifiez
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Works;
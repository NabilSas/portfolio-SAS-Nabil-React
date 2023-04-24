import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import pico from '../assets/pico.jpeg';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#0a192f]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-9xl sm:text-4xl font-bold text-white">
                        Je suis un développeur full-stack 
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h2>

                    <p className="text-gray-500 py-4 max-w-md">
                        Salut a tous, c'est Nabil SAS etudiant en 4eme annee filiere d'ingénierie des Méthodes Informatiques Appliquées à La Gestion Des Entreprises, a
                        l'École Marocaine des Sciences de l'Ingénieur.
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            A propos 
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={pico}
                        alt="my profile"
                        width="500" height="500"
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;
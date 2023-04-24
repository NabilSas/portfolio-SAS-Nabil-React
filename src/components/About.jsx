import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="py-10 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/8">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                A propos
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:gap-8 px-4">

                        <div>
                            <p>
                                Comme c'est mentionner avant je suis un développeur full-stack, j'ai une licence Sciences et Techniques
                                en Systèmes Informatiques Répartis a la Faculté des Sciences et Techniques Gueliz. Durant mon cursus j'ai une connaissance modeste dans
                                plusieurs language de balisage et programmation tel que  JAVA, PHP, C#, C++, C, HTML, XML, CSS,
                                JS, jQuery, Bootstrap, SQL, MySQL, Oracle, React Native, Windows et Linux.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
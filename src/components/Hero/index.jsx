import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { BgHero, hero, hero2, hero3, hero4 } from "../../assets/images";

function Hero() {
    return (
        <section
            id="home"
            className="flex lg:flex-row flex-col my-4 md:my-16 lg:h-[60vh] justify-between items-center md:px-12"
        >
            <div className="lg:w-1/2 h-full py-3 relative flex flex-col justify-center items-start gap-12">
                <h2 className="text-4xl font-bold text-gray-800">
                    Do you need a great product ?
                </h2>
                <p className="text-gray-700">
                    I am here to give you the best products and services
                    according to your need. We will go through the process
                    together as we build your project. An idea ? We will make it
                    a reality. Feel free to get in touch with me.
                </p>
                <a
                    href="mailto:tombozafy.ianel@gmail.com"
                    className="bg-indigo-500 text-white rounded-full px-6 py-3 w-64 text-center"
                >
                    Contact Me
                </a>
                {/* <img
                    className="mx-auto top-0 absolute object-cover h-full"
                    src={BgHero}
                    alt="Hero"
                />
                <img
                    className="mx-auto object-cover rounded-full h-full drop-shadow-2xl"
                    src={hero}
                    alt="Ianel Tombozafy"
                /> */}
            </div>
            <div className="lg:w-1/2 px-6 lg:px-12">
                <div className="flex mt-12 lg:mt-0 justify-center items-center pb-12 flex-wrap gap-8">
                    <img
                        className="bg-gray-400 -mt-12 object-cover h-32 md:h-48 lg:h-40 w-32 md:w-48 lg:w-40 rounded-2xl hover:transform hover:rotate-12 hover:transition-all"
                        src={hero2}
                        alt="Ianel Tombozafy"
                    />
                    <img
                        className="bg-gray-400 object-cover h-32 md:h-48 lg:h-40 w-32 md:w-48 lg:w-40 rounded-2xl hover:transform hover:rotate-12 hover:transition-all"
                        src={hero}
                        alt="Ianel Tombozafy"
                    />
                    <img
                        className="bg-gray-400 -mt-12 object-cover h-32 md:h-48 lg:h-40 w-32 md:w-48 lg:w-40 rounded-2xl hover:transform hover:rotate-12 hover:transition-all"
                        src={hero3}
                        alt="Ianel Tombozafy"
                    />
                    <img
                        className="bg-gray-400 object-cover h-32 md:h-48 lg:h-40 w-32 md:w-48 lg:w-40 rounded-2xl hover:transform hover:rotate-12 hover:transition-all hover:shadow-black"
                        src={hero4}
                        alt="Ianel Tombozafy"
                    />
                </div>
                {/* <h2 className="text-2xl text-center my-6 text-indigo-700 font-bold">
                    Frontend Developer
                </h2>
                <p className="my-6">
                    I am a frontend developer who is willing to build great
                    products for you. Together, we can create the desired
                    success and achieve our goals.
                </p>
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="https://web.facebook.com/ianel.tombozafy"
                        className="hover:text-indigo-700 hover:scale-110 cursor-pointer transform transition-all text-2xl"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ianel-tombozafy"
                        className="hover:text-indigo-700 hover:scale-110 cursor-pointer transform transition-all text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Ianel"
                        className="hover:text-indigo-700 hover:scale-110 cursor-pointer transform transition-all text-2xl"
                    >
                        <FaGithub />
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default Hero;

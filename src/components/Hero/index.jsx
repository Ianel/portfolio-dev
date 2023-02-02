import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { hero } from "../../assets/images";

function Hero() {
    return (
        <section
            id="home"
            className="flex lg:flex-row flex-col my-4 md:my-16 lg:h-[85vh] justify-between items-center md:px-12"
        >
            <div className="lg:w-1/2 h-full bg-hero bg-center bg-cover bg-no-repeat">
                <img
                    className="mx-auto object-cover rounded-full h-full drop-shadow-2xl"
                    src={hero}
                    alt="Ianel Tombozafy"
                />
            </div>
            <div className="lg:w-1/2 px-6 lg:px-12">
                <h2 className="text-2xl text-center my-6 text-indigo-700 font-bold">
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
                </div>
            </div>
        </section>
    );
}

export default Hero;

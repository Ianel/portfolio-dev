import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (showNav) {
            document.body.style.overflowY = "hidden";
        }
    }, [showNav]);

    return (
        <div className="relative">
            <nav className=" relative z-10 flex justify-between items-center px-6 py-3 md:px-12 md:py-4 shadow-md shadow-indigo-300">
                <h1 className="text-2xl font-semibold">
                    I<span className="text-indigo-500">a</span>nel T
                    <span className="text-indigo-500">o</span>mbozafy
                </h1>
                <div className="lg:flex hidden items-center gap-6">
                    <a
                        onClick={() => setShowNav(false)}
                        className=" hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#home"
                    >
                        Home
                    </a>
                    <a
                        className=" hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#services"
                    >
                        Services
                    </a>
                    <a
                        className=" hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className=" hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className=" hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#testimonials"
                    >
                        Testimonials
                    </a>
                </div>
                <a
                    href="#contact"
                    className="lg:bg-indigo-500 hidden lg:block lg:hover:bg-indigo-800 lg:text-white lg:px-4 lg:py-2"
                >
                    Contact Me
                </a>
                {showNav ? (
                    <button
                        className="lg:hidden transition-all transform"
                        onClick={() => {
                            let body = document.getElementById("root");
                            body.style.overflowY = "scroll";
                            setShowNav(false);
                        }}
                    >
                        <FaTimes />
                    </button>
                ) : (
                    <button
                        className="lg:hidden transition-all transform"
                        onClick={() => {
                            let body = document.getElementById("root");
                            body.style.overflowY = "hidden";
                            setShowNav(true);
                        }}
                    >
                        <FaBars />
                    </button>
                )}
            </nav>
            {showNav && (
                <div className="absolute top-14 md:top-16 overflow-y-hidden h-screen bg-indigo-500 left-0 z-50 flex flex-col justify-center items-center w-screen lg:hidden">
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#home"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#services"
                    >
                        Services
                    </a>
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#testimonials"
                    >
                        Testimonials
                    </a>
                    <a
                        onClick={() => setShowNav(false)}
                        className="py-3 hover:py-3 border-b-2 hover:w-full hover:text-center hover:bg-white hover:text-indigo-500 text-white border-b-transparent hover:border-b-white-500"
                        href="#contact"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;

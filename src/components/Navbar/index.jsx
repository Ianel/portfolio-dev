import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (showNav) {
            document.body.style.overflowY = "hidden";
        }

        document.body.style.overflowY = "unset";
    }, [showNav]);

    return (
        <div className="relative">
            <div className="sticky w-screen h-3 bg-indigo-500">
                <div className="w-16 md:w-48 h-3 rounded-lg bg-black bg-clip-padding backdrop-blur-lg backdrop-filter opacity-50 animate-slideSmall md:animate-slideLarge"></div>
            </div>

            <nav className="sticky z-10 flex items-center px-6 py-3 md:px-12 md:py-6">
                <h1 className="text-2xl font-semibold flex justify-start self-start">
                    IT
                </h1>
                <div className="lg:flex hidden absolute left-1/2 -translate-x-1/2 items-center gap-6">
                    <a
                        className="transform transition-all hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#home"
                    >
                        Home
                    </a>
                    <a
                        className="transform transition-all hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className="transform transition-all hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="transform transition-all hover:text-indigo-500 border-b-2 border-b-transparent hover:border-b-indigo-500"
                        href="#testimonials"
                    >
                        Testimonials
                    </a>
                </div>
                {/*  <a
                    href="mailto:tombozafy.ianel@gmail.com"
                    className="lg:bg-indigo-500 hidden lg:block lg:hover:bg-indigo-800 lg:text-white lg:px-4 lg:py-2"
                >
                    Contact Me
                </a> */}
                {showNav ? (
                    <button
                        className="lg:hidden absolute right-6 transition-all transform"
                        onClick={() => {
                            setShowNav(false);
                        }}
                    >
                        <FaTimes />
                    </button>
                ) : (
                    <button
                        className="lg:hidden absolute right-6 transition-all transform"
                        onClick={() => {
                            setShowNav(true);
                        }}
                    >
                        <FaBars />
                    </button>
                )}
            </nav>
            {showNav && (
                <div className="absolute top-16 md:top-20 overflow-hidden h-screen bg-indigo-500 left-0 z-50 flex flex-col justify-center items-center w-screen lg:hidden">
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
                        href="mailto:tombozafy.ianel@gmail.com"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;

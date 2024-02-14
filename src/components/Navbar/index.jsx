import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const handleToggleTheme = () => {
        if (localStorage.getItem("theme") == "light") {
            localStorage.setItem("theme", "dark");

            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");

            document.documentElement.classList.remove("dark");
        }
    };

    /* const initTheme = () => {
        localStorage.setItem("theme", "dark");
        localStorage.getItem("theme") === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    };

    useEffect(() => {
        initTheme();
    }, []); */

    useEffect(() => {
        if (showNav) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset";
        }
    }, [showNav]);

    return (
        <div className="relative">
            <div className="w-screen h-3 bg-indigo-500">
                <div className="w-16 md:w-48 h-3 rounded-lg bg-black bg-clip-padding backdrop-blur-lg backdrop-filter opacity-50 animate-slideSmall md:animate-slideLarge"></div>
            </div>

            <nav className="dark:bg-secondary-dark dark:text-white-dark z-10 flex justify-between items-center px-6 py-3 md:px-12 md:py-6">
                <h1 className="text-2xl font-semibold flex justify-start self-start">
                    Ianel Tombozafy
                </h1>
                <div className="lg:flex hidden items-center gap-6">
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
                <div className="flex relative items-center gap-4">
                    <button
                        className="dark:flex hidden hover:text-primary-dark p-2 hover:rounded-full hover:bg-gray-300 hover:transform hover:transition-all absolute lg:right-0 right-10 lg:relative"
                        onClick={handleToggleTheme}
                    >
                        <FaSun />
                    </button>

                    <button
                        className="flex dark:hidden p-2 hover:rounded-full  hover:bg-gray-300 hover:transform hover:transition-all absolute right-10 lg:right-0 lg:relative"
                        onClick={handleToggleTheme}
                    >
                        <FaMoon />
                    </button>

                    <a
                        href="tel:+261328178421"
                        className="rounded-full lg:border-indigo-500 border-2 hidden lg:block lg:hover:bg-indigo-800 hover:text-white text-indigo-600 lg:px-4 lg:py-2 hover:transform hover:transition-all"
                    >
                        +261 32 81 784 21
                    </a>
                </div>

                {showNav ? (
                    <button
                        className="dark:hover:text-primary-dark p-2 hover:rounded-full hover:bg-gray-300 hover:transform hover:transition-all lg:hidden absolute right-6 transition-all transform"
                        onClick={() => {
                            setShowNav(false);
                        }}
                    >
                        <FaTimes />
                    </button>
                ) : (
                    <button
                        className="dark:hover:text-primary-dark  p-2 hover:rounded-full hover:bg-gray-300 hover:transform hover:transition-all lg:hidden absolute right-6 transition-all transform"
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

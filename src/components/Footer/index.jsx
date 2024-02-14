import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="dark:bg-primary-dark dark:text-white-dark flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12 items-center gap-4 py-10 shadow-inv">
            <div className="order-2 lg:order-1">
                &copy; Copyright {new Date(Date.now()).getFullYear()} - All
                rigths reserved
            </div>
            <div className="flex justify-center items-center order-1 lg:order-2 gap-6">
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
        </footer>
    );
}

export default Footer;

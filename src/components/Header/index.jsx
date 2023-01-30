import React from "react";
import { hero } from "../../assets/images";

function Header() {
    return (
        <header className="mb-6">
            <img
                className="w-3/4 mx-auto mt-6"
                src={hero}
                alt="Ianel Tombozafy"
            />
            <h1 className="text-2xl text-gray-900 text-center my-6 font-bold">
                Ianel Tombozafy
            </h1>
            <p className="text-justify indent-8 text-gray-700">
                Je suis un développeur frontend prêt à vous servir lorsque vous
                en avez besoin. Avec mes compétences, je me tiens à votre
                disposition pour concrétiser vos projets.
            </p>
        </header>
    );
}

export default Header;

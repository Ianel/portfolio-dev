import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectCard({ imgSrc, name, description, githubLink, demoLink }) {
    return (
        <section>
            <img className="w-full object-cover" src={imgSrc} alt={name} />
            <h4 className="text-center font-bold text-gray-900 pt-4">{name}</h4>
            <p className="py-4 text-gray-700 text-justify">{description}</p>
            <div className="flex justify-between items-center">
                <button className="flex items-center gap-x-2">
                    <FaGithub />
                    <a href={githubLink}>Github</a>
                </button>
                <button className="flex items-center gap-x-2">
                    <FaGlobe />
                    <a href={demoLink}>Demo</a>
                </button>
            </div>
        </section>
    );
}

export default ProjectCard;

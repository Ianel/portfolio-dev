import React from "react";
import { FaGithub, FaGlobeAfrica } from "react-icons/fa";
import { projects } from "../../data";

function Projects() {
    return (
        <section id="projects" className="md:px-12 px-6 py-16">
            <h2 className="text-center text-indigo-500 font-bold text-2xl">
                Projects
            </h2>
            <h3 className="text-center text-gray-700 text-md mb-8">
                These are the projects that I have made with my skills
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap md:items-stretch my-10 justify-between items-start gap-4">
                {projects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className="shadow-lg w-full md:w-80"
                        >
                            <img
                                className="object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="p-6 h-[250px] flex flex-col justify-between">
                                <h4 className="text-gray-800 font-semibold">
                                    {project.title}
                                </h4>
                                <p className="py-2">{project.content}</p>
                                <p className="pb-2">
                                    <span className="text-gray-600 underline font-medium">
                                        Technology:{" "}
                                    </span>
                                    {project.technology}
                                </p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        <span>
                                            <FaGithub />
                                        </span>
                                        <span>Github</span>
                                    </a>
                                    <a
                                        href={project.live_url}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        <span>
                                            <FaGlobeAfrica />
                                        </span>
                                        <span>Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;

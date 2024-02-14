import React from "react";
import { skills } from "../../data";

function Skills() {
    return (
        <section
            id="skills"
            className="md:px-12 px-6 py-16 bg-[#eeeff2] dark:bg-secondary-dark dark:text-white-dark"
        >
            <h2 className="text-center text-indigo-500 font-bold text-2xl">
                Skills
            </h2>
            <h3 className="text-center text-gray-700 text-md mb-8">
                These skills are in constant evloutions to help you get the best
                products
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap md:items-stretch my-10 justify-center items-start gap-8">
                {skills.map((skill) => {
                    return (
                        <div
                            key={skill.id}
                            className="shadow-lg rounded-xl w-full md:w-64 p-6 bg-white group dark:text-white-dark dark:bg-primary-dark dark:hover:bg-indigo-600 hover:bg-indigo-600 hover:transform hover:transition-all hover:-translate-y-4"
                        >
                            <h4 className="text-gray-800 dark:text-inherit font-semibold mb-4 group-hover:text-white">
                                {skill.title}
                            </h4>
                            <p className="text-gray-700 dark:text-inherit group-hover:text-white">
                                {skill.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;

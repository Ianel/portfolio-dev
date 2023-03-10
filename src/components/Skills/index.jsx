import React from "react";
import { skills } from "../../data";

function Skills() {
    return (
        <section id="skills" className="md:px-12 px-6 py-16 bg-slate-100">
            <h2 className="text-center text-indigo-500 font-bold text-2xl">
                Skills
            </h2>
            <h3 className="text-center text-gray-700 text-md mb-8">
                These skills are in constant evloutions to help you get the best
                products
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap md:items-stretch my-10 justify-between items-start gap-4">
                {skills.map((skill) => {
                    return (
                        <div
                            key={skill.id}
                            className="shadow-lg w-full md:w-72 p-6 bg-white"
                        >
                            <h4 className="text-gray-800 font-semibold mb-4">
                                {skill.title}
                            </h4>
                            <p>{skill.content}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;

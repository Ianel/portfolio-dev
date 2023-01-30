import React from "react";
import Section from "../Section";

function Skills() {
    const skills = {
        title: "Compétences",
        description:
            "Mes compétences concernent principalement le frontend mais j'ai aussi des notions en backend. Cela ne fait pas de moi un fullstack pour autant. Mais je suis en mesure de comprendre comment fonctionne le tout pour faire fonctionner une app web",
    };

    return (
        <article>
            <Section title={skills.title} description={skills.description} />
            <section className="pt-6">
                <div>
                    <h3 className="font-bold text-gray-900">Frontend</h3>
                    <ul className="py-4">
                        <li className=" list-disc list-inside">
                            HTML5 / CSS3 / Vanilla JS
                        </li>
                        <li className=" list-disc list-inside">
                            React JS, Valtio, Redux
                        </li>
                        <li className=" list-disc list-inside">
                            Bootstrap, Tailwind CSS, Styled Components
                        </li>
                        <li className=" list-disc list-inside">
                            Git, Github, Gitlab
                        </li>
                        <li className=" list-disc list-inside">
                            Vercel, Netlify
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Backend</h3>
                    <ul className="py-4">
                        <li className=" list-disc list-inside">
                            MySQL, PostgreSQL, MongoDB
                        </li>
                        <li className=" list-disc list-inside">
                            Node JS, EXpress JS
                        </li>
                        <li className=" list-disc list-inside">Merise</li>
                        <li className=" list-disc list-inside">
                            Render, MongoDB Atlas
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    );
}

export default Skills;

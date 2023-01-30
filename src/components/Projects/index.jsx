import React from "react";
import Section from "../Section";
import { hero } from "../../assets/images";
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = {
        title: "Projets",
        description:
            "Les projets que j'ai réaliséé sont listés ci-dessous. Ils montrent mes compétences mais aussi mes limites. Ils ont été réalisés avec effort et perséverance",
    };

    const projectsInfos = [
        {
            imgSrc: hero,
            name: "Ophir International Services",
            description:
                "Site web d'une entreprise spécialisée dans le domaine du tourisme à Madagascar. Réalisé avec React JS et Tailwind CSS",
            githubLink: "https://github.com/Ianel",
            demoLink: "https://www.ophiris.com",
        },
        {
            imgSrc: hero,
            name: "Ophir International Services",
            description:
                "Site web d'une entreprise spécialisée dans le domaine du tourisme à Madagascar. Réalisé avec React JS et Tailwind CSS",
            githubLink: "https://github.com/Ianel",
            demoLink: "https://www.ophiris.com",
        },
        {
            imgSrc: hero,
            name: "Ophir International Services",
            description:
                "Site web d'une entreprise spécialisée dans le domaine du tourisme à Madagascar. Réalisé avec React JS et Tailwind CSS",
            githubLink: "https://github.com/Ianel",
            demoLink: "https://www.ophiris.com",
        },
        {
            imgSrc: hero,
            name: "Ophir International Services",
            description:
                "Site web d'une entreprise spécialisée dans le domaine du tourisme à Madagascar. Réalisé avec React JS et Tailwind CSS",
            githubLink: "https://github.com/Ianel",
            demoLink: "https://www.ophiris.com",
        },
    ];

    return (
        <section>
            <Section
                title={projects.title}
                description={projects.description}
            />
            <div>
                {projectsInfos.map((project) => {
                    return <ProjectCard {...project} />;
                })}
            </div>
        </section>
    );
}

export default Projects;

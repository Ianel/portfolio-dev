import React from "react";
import Section from "../Section";

function About() {
    const about = {
        title: " A propos",
        description: `Sortant de l'Institut Supérieur des Sciences et Technologies de
        Mahajanga, je suis spécialisé dans le développemnt frontend avec
        la librairie React JS. J'aime intégrer les maquettes pour les
        tranformer en produits utiles, utilisables et utilisés.`,
    };

    return <Section title={about.title} description={about.description} />;
}

export default About;

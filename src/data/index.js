import {
    bfa,
    doctor,
    movie,
    rick,
    upstrack,
    weatherly,
} from "../assets/images";

export const skills = [
    {
        id: 1,
        title: "HTML5",
        content:
            "It is the basis of every website. By analogy, it would be the bones of our body",
    },
    {
        id: 2,
        title: "CSS3",
        content:
            "It helps create the style of a website. By analogy, it would be the flesh of our body",
    },
    {
        id: 3,
        title: "JS",
        content:
            "It adds interactivity to a website. By analogy, it would be the muscle of our body",
    },
    {
        id: 4,
        title: "React JS",
        content:
            "A JS framework for building great user interfaces with minimal code to be written",
    },
    {
        id: 5,
        title: "Typescript",
        content:
            "A superset of Javascript that helps writting and reading code easier",
    },
    {
        id: 6,
        title: "Tailwind CSS",
        content:
            "A CSS framework that accelerate the development cycle by providing utility classes",
    },
    {
        id: 7,
        title: "Git",
        content:
            "A version control tool that makes collaboration inside a team fluid and easy",
    },
    {
        id: 8,
        title: "Visual Studio Code",
        content:
            "An editor that works with almost every language that exists. Lightweight, free and simple to use",
    },
];

export const projects = [
    {
        id: 1,
        image: rick,
        title: "Rick and Morty",
        content:
            "A simple website that lists all the episodes, characters and dimensions of the eponym show",
        technology: "React JS, Tailwind CSS, Vite",
        github_url: "https://github.com/Ianel/rick-and-morty",
        live_url: "https://rick-and-morty-ian.netlify.app",
    },
    {
        id: 2,
        image: upstrack,
        title: "Upstrack",
        content: "A landing page used for enhancing integration skills",
        technology: "React JS, Tailwind CSS, Vite",
        github_url: "https://github.com/Ianel/upstrack",
        live_url: "https://upstrack.netlify.app",
    },
    {
        id: 3,
        image: bfa,
        title: "Bijoux Fantaisistes Artistiques",
        content: "A website for a small artisitic business",
        technology: "HTML5, CSS3",
        github_url: "https://github.com/Ianel/bijoux-fantaisistes-artistiques",
        live_url: "https://bijoux-fantaisistes-artistiques.netlify.app",
    },
    {
        id: 4,
        image: doctor,
        title: "Doctor Web App",
        content: "A landing page for a personal doctor",
        technology: "React JS, Tailwind CSS, Create React App",
        github_url: "https://github.com/Ianel/doctor-app",
        live_url: "https://doctor-web-app.netlify.app",
    },
    {
        id: 5,
        image: weatherly,
        title: "Weatherly",
        content:
            "A simple web app that lets you get the weather infos about a specific city",
        technology: "React JS, Tailwind CSS, Typescript, Vite",
        github_url: "https://github.com/Ianel/weatherly",
        live_url: "https://weatherly-ian.netlify.app",
    },
    {
        id: 6,
        image: movie,
        title: "Movie Finder",
        content: "A web app that allows you search for movie infos",
        technology: "React JS, Tailwind CSS, Typescript, Vite",
        github_url: "https://github.com/Ianel/movie-finder",
        live_url: "https://movie-finder-ian.vercel.app",
    },
];

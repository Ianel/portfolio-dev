import React from "react";
import {
    Footer,
    Hero,
    Navbar,
    Projects,
    Skills,
    Testimonials,
} from "./components";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;

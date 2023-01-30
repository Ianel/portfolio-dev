import React from "react";
import { About, Header, Projects, Skills, TopLine } from "./components";

function App() {
    return (
        <>
            <TopLine />
            <main className="px-5">
                <Header />
                <About />
                <Skills />
                <Projects />
            </main>
        </>
    );
}

export default App;

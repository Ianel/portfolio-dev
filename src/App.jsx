import React from "react";
import { About, Header, Skills, TopLine } from "./components";

function App() {
    return (
        <>
            <TopLine />
            <main className="px-5">
                <Header />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default App;

import React from "react";
import { About, Header, TopLine } from "./components";

function App() {
    return (
        <>
            <TopLine />
            <main className="px-5">
                <Header />
                <About />
            </main>
        </>
    );
}

export default App;

// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";


import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Portfolio from "./Screens/Portfolio";
import AppScreen from "./Screens/AppScreen";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/appscreen/:AppTitle" element={<AppScreen />} />
                <Route
                    path="*"
                    element={
                        <main
                            style={{
                                padding: "1rem",
                                minHeight: "75vh",
                                backgroundColor: "#111",
                                color: "white",
                            }}
                        >
                            There's nothing here, check the URL and try again...
                        </main>
                    }
                />
            </Routes>
        </HashRouter>

    );
}

export default App;
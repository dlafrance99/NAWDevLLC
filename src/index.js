import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Portfolio from "./Screens/Portfolio";
import WhatWeDo from "./Screens/WhatWeDo";
import AppScreen from "./Screens/AppScreen";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="AppScreen/:AppTitle" element={<AppScreen />} />
        <Route path="*" element={
          <main style={{ padding: "1rem", height: '75vh' }}>
            <p style={{ color: 'white' }}>
              There's nothing here, check the URL and try again
            </p>
          </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
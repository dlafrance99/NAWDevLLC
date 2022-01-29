import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Portfolio from "./Screens/Portfolio";
import WhatWeDo from "./Screens/WhatWeDo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}>
        <Route path="NAWNAW" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="WhatWeDo" element={<WhatWeDo />} />
        <Route path="*" element={
          <main style={{padding: "1rem"}}>
            <p>There's Nothing here, check the URL and try again</p>
          </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
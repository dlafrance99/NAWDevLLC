// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


// // index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Screens/Home";
// import About from "./Screens/About";
// import Contact from "./Screens/Contact";
// import Portfolio from "./Screens/Portfolio";
// import AppScreen from "./Screens/AppScreen";

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/Home" element={<Home />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/appscreen/:AppTitle" element={<AppScreen />} />
//       <Route
//         path="*"
//         element={
//           <main style={{ padding: "1rem", height: "75vh" }}>
//             <p style={{ color: "white" }}>
//               There's nothing here, check the URL and try again...
//             </p>
//           </main>
//         }
//       />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

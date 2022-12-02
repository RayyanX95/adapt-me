import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./SearchParams.jsx";
import Details from "./Details";
import ThemeContext from "./ThemeContext.jsx";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <Link to="/">
            <h1>Adapt Me!</h1>
          </Link>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "brand" }, "Adapt Me!"),
//     React.createElement(Pet, {
//       name: "Luana",
//       animal: "Dog",
//       bread: "Havanesa",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       bread: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       bread: "Mix",
//     })
//   );
// };

render(<App />, document.getElementById("root"));

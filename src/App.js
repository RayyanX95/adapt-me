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
        <div className="p-o m-0" style={{ background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)" }}>
          <BrowserRouter>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1>Adapt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
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

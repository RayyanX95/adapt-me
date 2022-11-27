import { StrictMode } from "react";
import { render } from "react-dom";

import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adapt Me!</h1>
        <SearchParams />
      </div>
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

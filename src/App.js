import { render } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adapt Me!</h1>
      <Pet name="Luana" animal="Dog" bread="Havanesa" />
      <Pet name="Pepper" animal="Bird" bread="Cockatiel" />
      <Pet name="Doink" animal="Cat" bread="Mix" />
    </div>
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

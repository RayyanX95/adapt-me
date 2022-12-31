import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: string;
}

const Pet: FunctionComponent<IProps> = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.bread),
//   ]);
// };

export default Pet;

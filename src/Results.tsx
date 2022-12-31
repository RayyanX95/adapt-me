import Pet from "./Pet";
import { Pet as PetType } from "./api-responses-types";
import { FunctionComponent } from "react";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((p) => (
          <Pet
            name={p.name}
            animal={p.animal}
            breed={p.breed}
            key={p.id}
            images={p.images}
            location={`${(p.city, p.state)}`}
            id={p.id.toString()}
          />
        ))
      )}
    </div>
  );
};

export default Results;

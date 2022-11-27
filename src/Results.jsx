import Pet from "./Pet";

const Results = ({ pets }) => {
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
            id={p.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

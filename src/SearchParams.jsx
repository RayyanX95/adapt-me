import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Results from "./Results.jsx";
import useBreedList from "./useBreed";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];
const SearchParams = () => {
  const animal = useSelector((state) => state.animal);
  const location = useSelector((state) => state.location);
  const breed = useSelector((state) => state.breed);
  const theme = useSelector((state) => state.theme);

  console.log("animal", animal);
  console.log("breed", breed);

  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value));
              changeBreed("");
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value));
              changeBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            onChange={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
          >
            <option></option>
            {breeds.map((_bread) => {
              return (
                <option key={_bread} value={_bread}>
                  {_bread}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            name="theme"
            id="theme"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Darkblue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Mediumorchid</option>
            <option value="#fo6do6">Fog Dog</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }} type="submit">
          Submit
        </button>
      </form>
      {<Results pets={pets} />}
    </div>
  );
};

export default SearchParams;

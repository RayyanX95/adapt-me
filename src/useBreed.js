import { useEffect, useState } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("Loading...");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breed?animal=${animal}`
      );
      const json = res.json();
      localCache[animal] = json;
      setBreedList(localCache[animal]);
      setStatus("Loaded :)");
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;

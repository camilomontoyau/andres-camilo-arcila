import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './Components/CharacterCard/CharacterCard';

const translateKeys = (array) => {
  return array.map(value => {
    return ({
      name: value.name,
      birthYear: value.birth_year,
      eyeColor: value.eye_color,
      gender: value.gender,
      hairColor: value.hair_color,
      height: value.height,
      mass: value.mass,
      skinColor: value.skin_color
    });
  })
}

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // fetch("https://swapi.dev/api/people/")
      //   .then((r) => r.json())
      //   .then((response) => setCharacters(translateKeys(response.results)));

      // vas a usar axios
      axios.get("https://swapi.dev/api/people/")
        .then((response) => setCharacters(translateKeys(response.data.results)));

      // vas a usar async / await
      // const response = await fetch("https://swapi.dev/api/people/");
      // const json = await response.json();
      // const charactersFetch = json.results;
      // setCharacters(translateKeys(charactersFetch));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <ol className="container--characters">
          {/* componente reusable para cada personaje */}
          {characters.map((character) => {
            return (
              <div className="card--character--wrapper" key={character.name}>
                <CharacterCard data={character} />
              </div>
            );
          }
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;

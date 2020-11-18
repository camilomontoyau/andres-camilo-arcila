import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './Components/CharacterCard/CharacterCard';

const apiURI = "http://localhost:5000/characters/all";

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
      // fetch(apiURI)
      //   .then((r) => r.json())
      //   .then((response) => setCharacters(translateKeys(response)));

      // vas a usar axios
      // axios.get(apiURI)
      //   .then((response) => setCharacters(translateKeys(response.data)));

      // vas a usar async / await
      const response = await fetch(apiURI);
      const json = await response.json();
      const charactersFetch = json;
      console.log(charactersFetch, json, response);
      setCharacters(translateKeys(charactersFetch));
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

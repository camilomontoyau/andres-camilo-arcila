import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // fetch("https://swapi.dev/api/people/")
      //   .then((r) => r.json())
      //   .then((response) => setPersonajes(response.results));

      // vas a usar axios
      // axios.get("https://swapi.dev/api/people/")
      //   .then((response) => setPersonajes(response.data.results));

      // vas a usar async / await
      const response = await fetch("https://swapi.dev/api/people/");
      const json = await response.json();
      setPersonajes(json.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <ol>
          {/* componente reusable para cada personaje */}
          {personajes.map((personaje) => (
            <ul key={personaje.name}>{personaje.name}</ul>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;

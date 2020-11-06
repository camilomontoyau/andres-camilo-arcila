import "./App.css";
import { Component, useState, useEffect } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    // vas a usar axios
    // vas a usar async / await
    fetch("https://swapi.dev/api/people/")
      .then((r) => r.json())
      .then((response) => setPersonajes(response.results));
  });
  
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

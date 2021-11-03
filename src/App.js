import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Characters">Personagens</h1>
        <p className="Characters">Passe o mouse e veja quem está Vivo</p>

        <Characters characters={characters} />
      </header>
    </div>
  );
}

export default App;

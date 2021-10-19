import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function Home() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=30")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokeList]);

  const history = useHistory();

  const irParaPokedex = () => {
    history.push("/Pokedex");
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={irParaPokedex}>Abrir Pokedex</button>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Home;

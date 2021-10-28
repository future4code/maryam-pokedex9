import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./PokeList.css";
import { useHistory } from "react-router-dom";

function PokeList(props) {
  // props é um objeto com os nomes

  const history = useHistory();

  const irParaDetalhes = () => {
    history.push(`/pokemon/${props.nome}`);
  };

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${props.nome}/`;
    axios
      .get(url)
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addPokedex = () => {};

  return (
    <div className="card">
      {pokemons !== undefined && <p>{pokemons.name}</p>}
      {pokemons !== undefined && <img src={pokemons.sprites.front_default} />}
      <button onClick={() => addPokedex}>Adicionar</button>
      <button onClick={irParaDetalhes}>Detalhes</button>
    </div>
  );
}

export default PokeList;

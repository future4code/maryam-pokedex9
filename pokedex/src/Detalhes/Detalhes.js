import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Detalhes(props) {
  const history = useHistory();

  const voltarPagina = () => {
    history.goBack();
  };

  const [detalhePokemon, setDetalhePokemon] = useState({});

  useEffect(() => {
    const nomePoke = window.location.pathname.replace("/pokemon/", "");
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePoke}`;
    axios
      .get(url)
      .then((response) => {
        setDetalhePokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(detalhePokemon);

  return (
    <div>
      <header>
        <h2>Detalhes Pokemon</h2>
        <button onClick={voltarPagina}>Voltar</button>
      </header>
      <div>
        {detalhePokemon !== undefined && (
          <img src={detalhePokemon.sprites.front_default} />
        )}
        {detalhePokemon !== undefined && (
          <img src={detalhePokemon.sprites.back_default} />
        )}
      </div>
      <div>
        <h3>Descrição</h3>
      </div>
      <p>
        <strong>Nome: </strong>
        {detalhePokemon.name}
      </p>
      <p>
        <strong>Altura: </strong>
        {detalhePokemon.height}
      </p>
      <p>
        <strong>Largura: </strong>
        {detalhePokemon.weight}
      </p>
      <p>
        <strong>Nível: </strong>
        {detalhePokemon.base_experience}
      </p>
    </div>
  );
}

export default Detalhes;

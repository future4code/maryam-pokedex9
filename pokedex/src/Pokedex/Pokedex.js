import React from "react";
import { useHistory } from "react-router-dom";

function Pokedex() {
  const history = useHistory();

  const voltarPagina = () => {
    history.goBack();
  };

  const irParaDetalhes = () => {
    history.push("/Detalhes");
  };

  return (
    <div>
      <h2>Pokedex</h2>
      <button onClick={voltarPagina}>Voltar</button>
      <button onClick={irParaDetalhes}>Detalhes pokemon</button>
    </div>
  );
}

export default Pokedex;

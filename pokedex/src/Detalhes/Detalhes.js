import React from "react";
import { useHistory } from "react-router-dom";

function Detalhes() {
  const history = useHistory();

  const voltarPagina = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>Detalhes Pokemon</h2>
      <button onClick={voltarPagina}>Voltar</button>
    </div>
  );
}

export default Detalhes;

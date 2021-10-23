import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home/Home";
import Detalhes from "./Detalhes/Detalhes";
import Pokedex from "./Pokedex/Pokedex";

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20/")
      .then((response) => {
        // console.log(response.data)
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(pokeList);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home pokeList={pokeList} />
        </Route>

        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"/pokemon/:name"}>
          <Detalhes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

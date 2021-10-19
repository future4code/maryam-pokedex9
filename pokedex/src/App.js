import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Detalhes from "./Detalhes/Detalhes";
import Pokedex from "./Pokedex/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/Pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"/Detalhes"}>
          <Detalhes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function Home() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const loop = () => {
    let i = 0
    for(i=1; i<=20; i++){
      pegaPokemon(i)
    }
  }

  const pegaPokemon = (i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
    axios.get(url)
    .then((response) => {
      // console.log(typeof(response.data))
      setPokeList(pokeList.push(response.data))
      console.log("DENTRO DA FUNÇÃO", pokeList)
      // console.log("LISTA: ", typeof(pokeList))
    }).catch((error) => {
      console.log(error)
    })
  }

  console.log("DEPOIS DA FUNÇÃO", pokeList)


  // pokeList.length !== 0 ? console.log("Lista", pokeList) : console.log("não foi desta vez")

  useEffect(() => {
    loop()
    /* axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20/")
      .then((response) => {
        console.log(response.data)
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      }); */
  }, []);

  const history = useHistory();

  const irParaPokedex = () => {
    history.push("/Pokedex");
  };

  /* const pokeCard = pokeList.length !== 0 && pokeList.map((pokemon) => {
    <h3>{pokemon.name}</h3>
  }) */

  return (
    <div>
      <h2>Home</h2>
      <button onClick={irParaPokedex}>Abrir Pokedex</button>
      {/* <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select> */}
      {/* {pokeCard} */}
    </div>
  );
}

export default Home;

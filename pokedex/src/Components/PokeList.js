import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function PokeList (props) {

    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${props.nome}/`
        axios.get(url)
        .then((response) => {
        //   console.log(typeof(response.data))
          setPokemons(response.data)
        //   console.log("DENTRO DA FUNÇÃO", pokeList)
          // console.log("LISTA: ", typeof(pokeList))
        }).catch((error) => {
          console.log(error)
        })
    },[])

    console.log(pokemons)

    return(
        <div>
            {pokemons !== undefined && <img src={pokemons.sprites.front_default}/>}
        </div>
    )
}

export default PokeList
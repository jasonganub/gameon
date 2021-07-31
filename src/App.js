import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react"

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=500'

function App() {
  const [pokemonList, setPokemonList] = React.useState(null);

  useEffect(() => {
    axios
      .get(getAllPokemon)
      .then((res) => {
        setPokemonList(res.data.results);
      })
  })

  if (!pokemonList) return null;
  
  const pokemonItems = pokemonList.map((pokemon) =>
    <li key={pokemon.name}>
      <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px"></img>
      <br></br>
      {pokemon.name}
    </li>
  )

  return (
    <div>
      <h1>Pokedex</h1>
      <ul>{pokemonItems}</ul>
    </div>
  );
}

export default App;

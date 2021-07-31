import './App.css';
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=500'

function PokemonItems() {
  const [pokemonList, setPokemonList] = useState(null);

  // useEffect runs after the initial render which causes re-render infinite loop
  useEffect(() => {
    fetch(getAllPokemon)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
  }, [])

  if (!pokemonList) return null;

  const pokemonItems = pokemonList.map((pokemon) =>
    <li key={pokemon.name}>
      <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px"></img>
      {pokemon.name}
    </li>
  )

  return pokemonItems
}

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ul>{PokemonItems()}</ul>
    </div>
  );
}

export default App;

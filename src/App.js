import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import Pokemon from './utils/pokemon'

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=151'

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
      {pokemon.name}
      <br></br>
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

import './App.css';
import axios from 'axios';
import React from 'react';
import Pokemon from './utils/pokemon'

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=151'

function App() {
  const [pokemonList, setPokemonList] = React.useState(null);

  React.useEffect(() => {
    axios.get(getAllPokemon).then((response) => {
      setPokemonList(response.data.results);
    })
  })

  if (!pokemonList) return null;

  const pokemonItems = pokemonList.map((pokemon) => 
        <li>
          {pokemon.name}
          <br></br>
          {pokemon.url}
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

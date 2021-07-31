import './App.css';
import axios from 'axios';
import React from 'react';
import Pokemon from './utils/pokemon'

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=151'

function App() {
  const [pokemonList, setPokemonList] = React.useState(null);
  let pokemonWithDetails = [];

  React.useEffect(() => {
    axios.get(getAllPokemon).then((response) => {
      setPokemonList(response.data.results);
    })
  })

  if (!pokemonList) return null;

  pokemonList.map((pokemon) => 
    axios.get(pokemon.url).then((response) => {
      pokemonWithDetails.push(response.data.name)
    })
  )

  if (!pokemonWithDetails) return null;

  console.log(pokemonWithDetails)

  const pokemonItems = pokemonWithDetails.map((pokemon) => 
        <li>
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

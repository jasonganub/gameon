import './App.css';
import PokemonItems from "./utils/pokemonItems"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ul>{PokemonItems()}</ul>
    </div>
    
  );
}

export default App;

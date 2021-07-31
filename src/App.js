import './App.css';
import PokemonItems from "./utils/pokemonItems"
import { ChakraProvider, Box } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        Pokedex
        {PokemonItems()}
      </Box>
    </ChakraProvider>
  );
}

export default App;

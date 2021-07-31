import './App.css';
import PokemonItems from "./utils/pokemonItems"
import { ChakraProvider, Box, Image, Center } from "@chakra-ui/react"

function App() {
  const pokemon = PokemonItems()

  return (
    <ChakraProvider>
      <Box w="100%" p={4} color="white">
        <Center>
        <Image align="center" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        </Center>
        {pokemon}
      </Box>
    </ChakraProvider>
  );
}

export default App;

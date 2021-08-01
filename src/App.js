import './App.css';
import PokemonItems from "./utils/pokemonItems"
import { ChakraProvider, Box, Image, Center, SimpleGrid } from "@chakra-ui/react"

function App() {
  const pokemon = PokemonItems()

  return (
    <ChakraProvider>
      <Box w="100%" p={4} color="white">
        <Center>
        <Image pb="5" align="center" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        </Center>

        <SimpleGrid minChildWidth="240px" spacing="20px">
        {pokemon}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

import './App.css';
import PokemonItems from "./utils/pokemonItems"
import { ChakraProvider, Box, Image, Center, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from 'react';

const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const getAllPokemon = baseURL + '?limit=151'

function GetPokemon(name) {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/${name}`)
            .then((res) => {
                resolve(res.json())
            })
    })
}

function App() {
  const [names, setNames] = useState([]);
  const [data, setData] = useState([]);

  // useEffect runs after the initial render which causes re-render infinite loop
  useEffect(() => {
    fetch(getAllPokemon)
      .then((res) => res.json())
      .then((data) => {
        setNames(data.results.map(pokemon => {
          return pokemon.name
        }));
      })
  }, [])

  useEffect(() => {
    let pokemonRequests = []
    names.forEach(
      (name) => {
        pokemonRequests.push(GetPokemon(name))
      }
    )

    Promise.all(pokemonRequests).then((allPokemonData) => {
      setData(allPokemonData)
    })
  }, [names])

  const pokemon = PokemonItems(data)
  let types = []
  data.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      types.push(type.type.name)
    })
  })
  types = [...new Set(types)]
  console.log(types)

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

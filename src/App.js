import './App.css';
import PokemonItems from "./utils/pokemonItems"
import Colors from './utils/types'
import { ChakraProvider, Box, Image, Center, SimpleGrid, Badge } from "@chakra-ui/react"
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

  let types = []
  data.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      types.push(type.type.name)
    })
  })
  types = [...new Set(types)].sort()
  
  const pokemon = PokemonItems(data)

  return (
    <ChakraProvider>
      <Box w="100%" p={4} color="white">
        <Center>
          <Image pb="5" align="center" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        </Center>
        <Box pb="6">
          {types.map((type, _) => {
            const color = Colors[type]
            return <Badge borderRadius="full" px="2" backgroundColor={color} color="white" mr="1">{type}</Badge>
          })}
        </Box>

        <SimpleGrid minChildWidth="240px" spacing="20px">
          {pokemon}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

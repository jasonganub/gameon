import React, { useEffect, useState } from 'react';
import { Box, Image } from "@chakra-ui/react"

const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const getAllPokemon = baseURL + '?limit=5'

function Pokemon(pokemon) {
    return (
        <Box w="100%">
            <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px" />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        color="black"
                    >
                        {pokemon.name}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function GetPokemon(name) {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/${name}`)
            .then((res) => {
                resolve(res.json())
            })
    })
}

function PokemonItems() {
    const [pokemonNames, setPokemonNames] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);

    // useEffect runs after the initial render which causes re-render infinite loop
    useEffect(() => {
        fetch(getAllPokemon)
            .then((res) => res.json())
            .then((data) => {
                setPokemonNames(data.results.map(pokemon => {
                    return pokemon.name
                }));
            })
    }, [])

    if (!pokemonNames) return null;

    let pokemonRequests = []
    pokemonNames.forEach(
        (name) => {
            pokemonRequests.push(GetPokemon(name))
        }
    )
    
    Promise.all(pokemonRequests).then((allPokemonData) => {
        setPokemonData(allPokemonData.map(pokemon => {
            return Pokemon(pokemon)
        }))
    })

    return pokemonData
}

export default PokemonItems;
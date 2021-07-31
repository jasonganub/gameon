import React, { useEffect, useState } from 'react';
import { Box, Image } from "@chakra-ui/react"

const baseURL = 'https://pokeapi.co/api/v2'
const getAllPokemon = baseURL + '/pokemon?limit=500'

function Pokemon(pokemon) {
    return (
        <Box bg="white" maxW="sm" borderWidth="1px" borderRadius="lg" overlfow="hidden">
            <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px" />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {pokemon.name}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function PokemonItems() {
    const [pokemonList, setPokemonList] = useState(null);

    // useEffect runs after the initial render which causes re-render infinite loop
    useEffect(() => {
        fetch(getAllPokemon)
            .then((res) => res.json())
            .then((data) => {
                setPokemonList(data.results);
            })
    }, [])

    if (!pokemonList) return null;

    const pokemonItems = pokemonList.map((pokemon) =>
        Pokemon(pokemon)
    )

    return pokemonItems
}

export default PokemonItems;
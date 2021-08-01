import { useEffect, useState } from 'react';
import Pokemon from "./pokemon"

const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const getAllPokemon = baseURL + '?limit=2'

function GetPokemon(name) {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/${name}`)
            .then((res) => {
                resolve(res.json())
            })
    })
}

function PokemonItems() {
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
            setData(allPokemonData.map(pokemon => {
                return Pokemon(pokemon)
            }))
        })
    }, [names])

    return data
}

export default PokemonItems;
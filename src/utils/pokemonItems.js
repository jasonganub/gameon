import Pokemon from "./pokemon"

function PokemonItems(data) {
    const pokemon = data.map(pokemon => {
        return Pokemon(pokemon)
    })

    return pokemon
}

export default PokemonItems;
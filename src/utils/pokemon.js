import { Box, Image, Badge } from "@chakra-ui/react"
import Colors from "./types"

function Pokemon(pokemon) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2">
            <Image pt="6" pl="6" alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px" />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {pokemon.types.map((value, _) => {
                        const type = value.type.name
                        const color = Colors[type]
                        return (
                            <Badge borderRadius="full" px="2" backgroundColor={color} color="white" mr="1">
                                {type}
                            </Badge>
                        )
                    })}

                    <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                        {pokemon.height * 10} cm &bull; {pokemon.weight / 10} kg
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated color="black">
                    {pokemon.name}
                </Box>

                <Box as="span" color="gray.600" fontSize="sm">
                    {pokemon.abilities.map((value, i) => {
                        const ability = value.ability.name
                        if (pokemon.abilities.length === i + 1) {
                            return <span>{ability}</span>
                        } else {
                            return <span>{ability} &bull; </span>
                        }

                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Pokemon;
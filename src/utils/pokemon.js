import { Box, Image, Badge } from "@chakra-ui/react"
import Colors from "./types"

function Pokemon(pokemon) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2">
            <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px" />

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

                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {pokemon.height * 10} cm &bull; {pokemon.weight / 10} kg
                    </Box>
                </Box>

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
    )
}

export default Pokemon;
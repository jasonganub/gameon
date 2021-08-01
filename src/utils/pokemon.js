import { Box, Image, Badge } from "@chakra-ui/react"

function Pokemon(pokemon) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2">
            <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width="200px" height="200px" />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {pokemon.types.map((value, _) => {
                        return (
                            <Badge borderRadius="full" px="2" colorScheme="teal" mr="1">
                                {value.type.name}
                            </Badge>
                        )
                    })}
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
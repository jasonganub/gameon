import { Box, Image } from "@chakra-ui/react"

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

export default Pokemon;
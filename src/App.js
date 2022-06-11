import "./App.css";
import { useEffect, useState } from "react";
import Pokemon from "./utils/pokemon";
import {
  ChakraProvider,
  Box,
  Image,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

const baseURL = "https://pokeapi.co/api/v2/pokemon";
const getAllPokemon = baseURL + "?offset=0&limit=30";

function GetPokemon(name) {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/${name}`).then((res) => {
      resolve(res.json());
    });
  });
}

function App() {
  const [names, setNames] = useState([]);
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const pokemonName = data.results.map((value) => value.name);
    const pokemons = [...names, ...pokemonName];
    setNames(pokemons);
    setNextUrl(data.next);
    setLoading(false);
  };

  // useEffect runs after the initial render which causes re-render infinite loop
  useEffect(() => {
    fetchPokemon(getAllPokemon);
  }, []);

  useEffect(() => {
    let pokemonRequests = [];
    names.forEach((name) => {
      pokemonRequests.push(GetPokemon(name));
    });

    Promise.all(pokemonRequests).then((allPokemonData) => {
      setData(
        allPokemonData.map((pokemon) => {
          return Pokemon(pokemon);
        })
      );
    });
  }, [names]);

  // check scroll position is reached the end and then fetch more pokemon
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      setLoading(true);
    }
  }

  useEffect(() => {
    if (!loading) return;
    fetchPokemon(nextUrl);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <Box w="100%" p={4} color="white">
        <Center>
          <Image
            pb="5"
            align="center"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          />
        </Center>

        {loading ? (
          <div
            style={{
              position: "sticky",
              zIndex: "1",
              height: "150px",
              width: "150px",
              left: "0px",
              right: "0px",
              top: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Spinner
              thickness="10px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : null}

        <SimpleGrid minChildWidth="240px" spacing="20px">
          {data}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

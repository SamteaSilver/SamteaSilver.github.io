import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Form from './components/Form'
import PokemonDisplay from './components/PokemonDisplay'
function App() {

  // State to hold pokemon data
  const [pokemon, setPokemon] = useState(null)
  const [pokedex, setPokedex] = useState(null)

  const getPokemon = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );

      //set the Pokemon state to the pokemon
      setPokemon(response.data);
    } catch (err) {
      console.log(err)
    }
  };

  const getPokedex = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${searchTerm}`
      );

      //set the Pokedex state to the pokedex
      setPokedex(response.data);
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <>
      <Form pokemonSearch={getPokemon} pokedexSearch={getPokedex} />
      <PokemonDisplay pokemon={pokemon} pokedex={pokedex} />
    </>
  )
}

export default App
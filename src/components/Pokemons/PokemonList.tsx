import React from 'react'
import { useGetPokemons } from '../../hooks/useGetPokemons'
import { usePokemons } from '../../hooks/usePokemon'

const PokemonList = () => {
    const pokemons = useGetPokemons()
    //const queryPokemons = usePokemons()
    const { data: poke, isLoading, isError } = usePokemons();

    console.log({ pokemons, poke })
    return (
        <div>PokemonList</div>
    )
}

export default PokemonList
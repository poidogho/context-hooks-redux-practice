import React from 'react'
import PokemonList from './PokemonList'
import TanstackProvider from '../../providers/TanstackProvider'

const Pokemons = () => {
    return (
        <TanstackProvider><PokemonList /></TanstackProvider>
    )
}

export default Pokemons
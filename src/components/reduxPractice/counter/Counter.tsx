import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../state/reduxState/store'
import { Box, Button } from '@mui/material'
import { increment, decrement } from '../../../state/reduxState/counter/counterSlice'
import { fetchPokemons, getPokemons } from '../../../state/reduxState/pokemon/pokemonSlice'

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const pokemons = useSelector((state: RootState) => state.pokemon.pokemons)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])

    console.log({ pokemons })
    return (
        <div>
            <h1>{`Count ${count}`}</h1>
            <Box>
                <Button variant='contained' onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <Button variant='contained' onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </Box>
        </div>
    )
}

export default Counter
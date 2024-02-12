// Import necessary functions from Redux Toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async action
export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        return data.results; // Assuming you want the list of Pokémon
    }
);

type PokemonState = {
    pokemons: [];
    status: string;
    error: string | null | undefined
}

const initialState: PokemonState = {
    pokemons: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null
}

// Define the slice
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemons: (state, action) => {
            state.pokemons = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add any fetched pokemons to the array
                state.pokemons = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { getPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer;

import { useState, useEffect } from 'react'

export const useGetPokemons = () => {
    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon')
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            }
        }
        fetchPokemons()
    }, [])

    return pokemons
}
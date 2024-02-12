import { useQuery } from '@tanstack/react-query'

const fetchPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json()
}

export const usePokemons = () => {
    return useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
        //@ts-ignore
        options: {
            keepPreviousData: true,
        }
    })
}
import { useQuery } from '@tanstack/react-query'

type CryptoQueryKey = ['cryptos', number, number];
interface QueryFunctionContext {
    queryKey: CryptoQueryKey;
}

const API_BASE_URL = 'https://pro-api.coinmarketcap.com';
const API_KEY = '44d70180-fe03-41dc-a6e2-b78d07438ef0';

const headers = {
    'X-CMC_PRO_API_KEY': API_KEY,
    'Accept': 'application/json',
};

const fetchMetaData = async (id: number) => {
    const response = await fetch(
        `${API_BASE_URL}/v2/cryptocurrency/info?id=${id}`,
        {
            headers,
        }
    );
    return response.json()
}


const fetchCryptos = async ({ queryKey }: QueryFunctionContext) => {
    const [, limit, start] = queryKey;
    console.log({ start, limit })
    const url = `${API_BASE_URL}/v1/cryptocurrency/listings/latest?limit=${limit}&start=${start}`;

    const response = await fetch(url, {
        headers
    });

    console.log({ response })

    const hmap = new Map<number, any>()
    const cryptocurrencies = await response.json();
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return cryptocurrencies;
};


export const useCryptosQuery = (limit: number, start: number) => {
    return useQuery({
        queryKey: ['cryptos', limit, start],
        queryFn: fetchCryptos,
        //@ts-ignore
        options: {
            keepPreviousData: true,
            refetchInterval: 60000
        }
    });
};
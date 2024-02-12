import React, { useState } from 'react'
import { useCryptosQuery } from '../../hooks/useGetCryptos'

const CryptoTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const start = ((currentPage - 1) * itemsPerPage + 1)
    const { data: cryptos, isLoading, isError } = useCryptosQuery(itemsPerPage, start);
    console.log({ cryptos })

    return (
        <div>CrptoTable</div>
    )
}

export default CryptoTable
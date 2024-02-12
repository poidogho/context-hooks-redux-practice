import React from 'react'
import CryptoTable from './CryptoTable'
import TanstackProvider from '../../providers/TanstackProvider'

const Crypto = () => {
    return (
        <TanstackProvider><CryptoTable /></TanstackProvider>
    )
}

export default Crypto
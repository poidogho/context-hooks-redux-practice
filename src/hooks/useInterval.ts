import { useState, useEffect } from 'react'

export const useInterval = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const intervals = setInterval(() => {
            setTime((prevCount) => (prevCount === 60 ? 0 : prevCount + 1));
        }, 1000)

        return (() => {
            clearInterval(intervals)
        })
    }, [])

    return time
}
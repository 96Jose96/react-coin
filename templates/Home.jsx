import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import getCoins from "../utils/getCoins"

function Home() {
    const [coinsInfo, setCoinsInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coinsData = await getCoins()
                setCoinsInfo(coinsData.data)
            } catch (error) {
                console.log('Error al obtener datos', error)
            }
        }
        fetchData()
        const updateFetchData = setInterval(fetchData, 1000)
        return () => clearInterval(updateFetchData)
    }, [])

    return (
        <>
            <h1>Principales Criptomonedas</h1>
            <ul>
                {coinsInfo.map((info) => (
                    <li key={info.id}>
                        <Link to={`/coins/${info.id}`}>
                            <h2>{info.name}</h2>
                        </Link>
                        <p><span>Symbol:</span> {info.symbol}</p>
                        <p><span>Price Usd:</span> {info.priceUsd}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home
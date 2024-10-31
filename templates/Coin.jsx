import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getCoinsDetails from "../utils/coinDetails"

function Coin() {
    const [detailsInfo, setDetailsInfo] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailsCoinsData = await getCoinsDetails(id)
                setDetailsInfo(detailsCoinsData)
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
            <h1>{detailsInfo.name}</h1>
            <p><span>Symbol:</span> {detailsInfo.symbol}</p>
            <p><span>Price Usd:</span> {detailsInfo.priceUsd}</p>
            <p><span>% Change 24Hr:</span> {detailsInfo.changePercent24Hr}</p>
            <p>{detailsInfo.explorer}</p>
            <p><span>Market Cap Usd:</span> {detailsInfo.marketCapUsd}</p>
            <p><span>Max Supply:</span> {detailsInfo.maxSupply}</p>
            <p><span>Rank:</span> {detailsInfo.rank}</p>
            <p><span>Supply:</span> {detailsInfo.supply}</p>
        </>
    )
}

export default Coin
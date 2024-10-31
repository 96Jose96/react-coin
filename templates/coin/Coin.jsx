import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getCoinsDetails from "../../utils/coinDetails"
import { checkIsFavorite, addOrRemoveFavorite } from "../../utils/checkIsFavorite"
import styles from "./Coin.module.css"

function Coin() {
    const [detailsInfo, setDetailsInfo] = useState([])
    const { id } = useParams()
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailsCoinsData = await getCoinsDetails(id)
                setDetailsInfo(detailsCoinsData)
                checkIsFavorite(detailsCoinsData.id, setFavorite)
            } catch (error) {
                console.log('Error al obtener datos', error)
            }
        }

        fetchData()

        const updateFetchData = setInterval(fetchData, 1000)
        return () => clearInterval(updateFetchData)
    }, [])

    const handleFavorite = () => {
        addOrRemoveFavorite(detailsInfo.id, favorite, setFavorite)
    }

    return (
        <div className={styles.body}>
            <div className={styles.coin}>
                <h2>{detailsInfo.name}</h2>
                <div className={styles.details}>
                    <p><span>Symbol:</span> {detailsInfo.symbol}</p>
                    <p><span>Price Usd:</span> {detailsInfo.priceUsd} $</p>
                    <p><span>% Change 24Hr:</span> {detailsInfo.changePercent24Hr} %</p>
                    <p><span>Market Cap Usd:</span> {detailsInfo.marketCapUsd} $</p>
                    <p><span>Max Supply:</span> {detailsInfo.maxSupply}</p>
                    <p><span>Rank:</span> {detailsInfo.rank}</p>
                    <p><span>Supply:</span> {detailsInfo.supply}</p>
                    <h3><a href={detailsInfo.explorer} target="_blank">{detailsInfo.explorer}</a></h3>
                </div>
                <button onClick={handleFavorite}>{favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}</button>
            </div>
        </div>
    )
}

export default Coin
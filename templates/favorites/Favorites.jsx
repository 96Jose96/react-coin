import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Favorites.module.css"  

function Favorites() {
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        const getFavoritesCoins = () => {
            const favoritesCoins = JSON.parse(localStorage.getItem('favorites')) || []
            setFavorites(favoritesCoins)
        }
        getFavoritesCoins()
    }, [])

    return (
        <>
            <h2 className={styles.favorites}>Criptomonedas Favoritas</h2>
            <ul className={styles.favorites}>
                {favorites.length > 0 ? (favorites.map((coinId) => (
                    <li key={coinId}>
                        <Link to={`/coins/${coinId}`}>{coinId}</Link>
                    </li>
                ))) : <h3>Lista vacia. Agrega alguna criptomoneda.</h3>}
                
            </ul>
        
        </>
    )
}

export default Favorites
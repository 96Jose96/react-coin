import { useEffect, useState } from "react"
import { Link } from "react-router-dom"  

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
            <h2>Criptomonedas Favoritas</h2>
            <ul>
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
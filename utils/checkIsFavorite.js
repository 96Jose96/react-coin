const checkIsFavorite = (coinId, setFavorite) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorite(favorites.includes(coinId))
}

const addOrRemoveFavorite = (coinId, favorite, setFavorite) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (!favorite) {
        favorites.push(coinId)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setFavorite(true)
    } else {
        const updateFavorites = favorites.filter(id => id !== coinId)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
        setFavorite(false)
    }
}

export {checkIsFavorite, addOrRemoveFavorite}
async function getCoins () {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets/')
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log('Error al obtener los datos', error)
    }
}

export default getCoins
import { useParams } from "react-router-dom"

async function getCoinsDetails () {
    const { id } = useParams()
    
    try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
        const detailsData = await response.json()
        console.log(detailsData)
        return detailsData.data
    } catch (error) {
        console.log('Error al obtener los datos', error)
    }
}

export default getCoinsDetails
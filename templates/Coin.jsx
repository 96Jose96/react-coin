import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import getCoinsDetails from "../utils/coinDetails"

function Coin() {
    const [detailsInfo, setDetailsInfo] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailsCoinsData = await getCoinsDetails()
                setDetailsInfo(detailsCoinsData.data)
            } catch (error) {
                console.log('Error al obtener datos', error)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <h1>{detailsInfo.name}</h1>
        </>
    )
}

export default Coin
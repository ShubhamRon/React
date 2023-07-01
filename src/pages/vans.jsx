import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function VansDeatatils() {
    const [Fetched, IsFetched] = useState()
    const params = useParams()

    useEffect(() => {
        fetch(`https://46fbec6e-fdca-4563-8dc7-d1d108045f0c.mock.pstmn.io/get?test=123`)
            .then(res => res.json())
            .then((data) => IsFetched(data.vans))
    }, [])

    let vaans = (<p>Loading...</p>)
    if (Fetched) {
        let VansId = Fetched.filter((data) => data.id == params.id)
        vaans = VansId.map((data) => (
            <div className="VansContainer" key={data.id}>
                <h3>{data.name}</h3>
                <img className="ImgDetails" src={data.imageUrl} />
                <div className="Detailspage">
                    <p>{data.price}0 ₹/day</p>
                    <p>{data.description}</p>
                </div>
                <button className="btncolor">{data.type}</button>
            </div>
        ))
    }
    return (<><div className="DetailsContainer">{vaans}</div></>)
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Contact() {
    const [Fetched, SetFetched] = useState("")
    const [IsFetched, SetIsFetched] = useState({
        IsGood: true,
        IsFetched: false
    })

    useEffect(() => {
        SetIsFetched((p) => ({ ...p, IsFetched: false }))
        fetch("https://46fbec6e-fdca-4563-8dc7-d1d108045f0c.mock.pstmn.io/get?test=123")
            .then((res) => res.json())
            .then((data) => SetFetched(data.vans))
        SetIsFetched((p) => ({ ...p, IsFetched: true }))

    }, [])
    let vans = (<p>Vans Will Show Up Here...</p>)
    if (Fetched) {
        vans = Fetched.map((data) => (
            <div className="VansContainer" key={data.id}>
                <Link to={`/vans/${data.id}`}>
                    <h3>{data.name}</h3>
                    <img src={data.imageUrl} />
                    <div>
                        <p>{data.price}0 ₹/day</p>
                    </div>
                    <button className="btncolor">{data.type}</button>
                </Link>

            </div>
        ))
    }

    return (<><h2 style={{ textAlign: "center" }}>Explore Our Vans....</h2><div className="VansOuterContainer">{IsFetched.IsFetched ? vans : (<p>Loading...</p>)}</div></>)
}      
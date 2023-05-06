import React from "react"
import { useParams } from "react-router-dom"
import { useOutlet, useOutletContext } from "react-router-dom"

export default function Phone() {
    const { constants } = useOutletContext();

    return (
        <><p>Your Phone is {constants.phone}</p></>
    )
}
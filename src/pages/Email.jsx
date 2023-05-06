import React from "react"
import { useOutlet, useOutletContext } from "react-router-dom"


export default function Email() {

    const { constants } = useOutletContext();
    return (
        <><p>Your Email is: {constants.email}</p></>
    )
}

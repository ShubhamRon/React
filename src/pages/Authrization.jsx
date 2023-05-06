import React from "react"

import { Outlet, Navigate } from "react-router-dom"


export default function Authrization() {

    let Name = localStorage.getItem("Name");

    const IsAuth = Name

    if (!IsAuth) {

        return <Navigate to="/login" />
    }
    return (<Outlet />)


}
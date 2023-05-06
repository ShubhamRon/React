import "../App.css"
import React from "react"
import { NavLink } from 'react-router-dom'
import { Outlet } from "react-router-dom";



export default function Contact() {

    const styles = {
        color: "red",
        fontWeight: "blue",
        textDecoration: "underline"
    }

    const constants = {
        name:"Vaibhav Yadav",
        phone:"+91 9452232323",
        email:"21vaibhav11@gmail.com"
    }

    return (
        <>
            <div className="ContactContainer">
                <h1>Contact</h1>
                <div className="aboutContainer">
                    <NavLink to="/contact/phone" style={({ isActive }) => isActive ? styles : null}>
                        Phone
                    </NavLink>


                    <NavLink to="/contact/Email" style={({ isActive }) => isActive ? styles : null}>
                        <p>Email</p>
                    </NavLink>
                </div>
                <div>
                <Outlet context={{constants}}/>
                </div>
            </div>
        </>
    )
}
import React, { useState } from "react"
import { NavLink, Form } from "react-router-dom"
import "./Auth.css"



export default function Login() {

    function Log_In() {
        localStorage.setItem("Name", "Vaibhav")
    }

    // const [Cre, SetCre] = useState({
    //     email: "",
    //     password: ""
    // })

    // function onchangeData(e) {
    //     const { name, value } = e.target
    //     SetCre(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (


        <>

            <Form>
                
            </Form>



            {/* <div className="LoginContainer">

                <Form method="POST">

                 

                </Form>
                    {/* <div className="LockMe" onClick={Log_In}>
                        <NavLink to="/">Log In</NavLink>
                    </div> */}
{/* 
                 <p>Please Login</p>
                <h1>Login Page here</h1>  */}
            {/* </div>  */}


        </>
    )
}
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <>
            <nav>
                <NavLink className={({isActive}) => isActive ? "Active" : ""} to="/">#VANLIFE</NavLink>
                <div>
                    <NavLink className={({isActive}) => isActive ? "Active" : ""} to="/host">Host</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Active" : ""} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Active" : ""} to="/vans">Vans</NavLink>
                </div>
            </nav>
        </>)
}
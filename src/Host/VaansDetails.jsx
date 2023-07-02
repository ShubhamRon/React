import { NavLink, Outlet } from "react-router-dom"

export default function HostVaans() {

    return (
        <>
            <NavLink to=".." className="backbutton" relative="path"> Back To All Vans</NavLink>
            <h3>Host Vaans Details</h3>

            <nav>
                <NavLink className={({ isActive }) => isActive ? "Active" : ""} to="." end>Details</NavLink>
                <NavLink className={({ isActive }) => isActive ? "Active" : ""} to="price">Price</NavLink>
                <NavLink className={({ isActive }) => isActive ? "Active" : ""} to="photos">Photo</NavLink>
            </nav>

            <Outlet />
        </>
    )
}
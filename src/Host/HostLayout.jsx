import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

    return (
        <>
            <div className="HostlayoutContainer">
                <NavLink className={({isActive}) => isActive ? "Active" : ""} to="." end>Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? "Active" : ""} to="income">Income</NavLink>
                <NavLink className={({isActive}) => isActive ? "Active" : ""} to="vaans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? "Active" : ""} to="reviews">Reviews</NavLink>
            </div>
            <Outlet />
        </>
    )
}
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {

    return (
        <>
            <div className="HostlayoutContainer">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </div>
            <Outlet />
        </>
    )
}
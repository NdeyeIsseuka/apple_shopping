import { Link, Outlet } from "react-router-dom";
import CreateArticle from "../pages/CreateArticle";
import PanierArticle from "../pages/PanierArticle";


export default function Layout() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">IK's Apple Store : Explore our Collection</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/create">Plus</Link>
                        </li>
                        <li>
                            <Link to="/panier">🛒</Link>
                        </li>


                    </ul>
                </div>
            </div>

            <div className="min-h-screen bg-base-200 py-4 px-8">
                <Outlet />
            </div>

        </>
    )
}
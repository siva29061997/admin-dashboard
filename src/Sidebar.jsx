import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContaxt from "./useContaxt";

function Sidebar() {
    let context = useContext(UserContaxt)
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">wellcome<br/>{context.username}</div>
                
            </a>


            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashbord">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to="/portal/users">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Users</span></Link>
            </li>

            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to="/portal/products">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Products</span></Link>
            </li>
        </ul>
    )
}

export default Sidebar;
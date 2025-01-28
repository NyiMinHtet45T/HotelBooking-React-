
import { Link, useNavigate } from 'react-router-dom'
import { getUserId, isAdmin, isUserLogIn, logout } from '../service/AuthService'
import { RiBuilding3Line, RiListOrdered, RiXrpLine } from "@remixicon/react";

export default function NavbarComponent() {

    const nevigate = useNavigate();

    const adminId = getUserId();

    const isThatAdmin = isAdmin();

    const isAuth = isUserLogIn();

    const logoutUser = () => {
        logout();
        nevigate("/");
        window.Reflect();
    };

   
    return (
        <>
            <div className="navbar1">
                <Link to={"/"} className="logo">M0StAR<RiBuilding3Line size={15}/></Link>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="icons">
                    <RiListOrdered id="menu-icon"/>
                    <RiXrpLine id="close-icon"/>
                </label>
                <nav className="navbars">
                    <Link style={{"--i":0}} to={"/"}>Home</Link>
                    <Link style={{"--i":1}} to={"/rooms"} >Rooms</Link>
                    {isThatAdmin ? <Link style={{"--i":2}} to={"/admin/"+adminId} >Admin</Link> : <Link style={{"--i":2}} to={"/userInfo/"+adminId} >UserInfo</Link>}
                    <Link style={{"--i":3}} to={"/content"}>Contact</Link>
                    {!isAuth && (<Link style={{"--i":4}} to={"/login/0"}>Register</Link>)}
                    {!isAuth && (<Link style={{"--i":5}} to={"/login/0#log"}>Login</Link>)}
                    {isAuth && (<Link style={{"--i":6}} to={"/"} onClick={logoutUser}>Logout</Link>)}
                </nav>
            </div>
        </>
    )
}

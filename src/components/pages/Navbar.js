import { useState } from "react"
import { Link } from "react-router-dom"
import notificationImg from "../images/notification.png"
import userImg from "../images/user.png"
import DropdownList from "./Dropdown"

export default function Navbar(){

    const [dropdown, toggleDropdown] = useState(false)

    function drop(){
        toggleDropdown(prev => !prev)
    }

    return(
        <nav>
            <ul className="nav-items">
                <li className="nav-item"><Link className="link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="link" to="/investment">Investment</Link></li>
                <li className="nav-item"><Link className="link" to="/transaction">Transaction</Link></li>
                <li className="nav-item"><Link className="link" to="/goal">Goal</Link></li>
            </ul>
            <div className="for-icon">
                <img src={notificationImg} className="notification-bell"/>
                <p className="username">Username</p>
                <img onClick={drop} src={userImg} className="user-img" />
                {dropdown && <DropdownList/>}
            </div>
        </nav>
    )
}
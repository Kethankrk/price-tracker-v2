import { Link } from "react-router-dom"
import notificationImg from "../images/notification.png"
import userImg from "../images/user.png"

export default function Navbar(){
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
                <img src={userImg} className="user-img" />
                <div className="dropdown"><h1>hello</h1></div>
            </div>
        </nav>
    )
}
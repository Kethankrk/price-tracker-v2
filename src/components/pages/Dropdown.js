import { Link } from "react-router-dom"

export default function DropdownList(){

    return(
        <>
            <div className="dropdown">
                <ul className="dropdown-ul">
                    <li className="dropdown-li">
                        <Link className="link" to="/profile">My Profile</Link>
                    </li>
                    <li className="dropdown-li dropdown-link">
                        <Link className="link" to="/login">Sign Out</Link>
                    </li>
                </ul>
            </div>
        </>
    )
} 
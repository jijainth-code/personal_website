import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="#">Blog<FaAngleDown /> </Link>
                    <ul className="axil-submenu">
                        <li><Link to='#'>Coming Soon</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
import React, { useState } from 'react';
import menuIcon from '../images/icon-menu.svg';
import Navbar from './Navbar';
import closeIcon from '../images/icon-close.svg';

const MobileMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuIconClick = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const handleCloseIconClick = () => {
        setSidebarOpen(false);
    }

    return (
        <div>
            <img
                onClick={handleMenuIconClick}
                id="menu-icon"
                src={menuIcon}
                alt="Menu"
            />
            <div className={`overlay ${sidebarOpen ? 'show-overlay' : ''}`}>
                {sidebarOpen && (
                    <div className="sidebar">
                        <div className="sidebarContent">
                            <img
                                id="close-icon"
                                onClick={handleCloseIconClick}
                                src={closeIcon}
                                alt="Close" />
                            <nav className="mobileNav">
                                <ul className="menuList">
                                    <li className="menuItem mobileMenuItem">Collections</li>
                                    <li className="menuItem mobileMenuItem">Men</li>
                                    <li className="menuItem mobileMenuItem">Women</li>
                                    <li className="menuItem mobileMenuItem">About</li>
                                    <li className="menuItem mobileMenuItem">Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                )}
            </div>
        </div >
    );
};

export default MobileMenu;
import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import Nav from './jaiNav'
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import { FaFacebookF, FaLinkedin, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';


const HeaderThree = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    return (
        <>
            <header className="header axil-header header-style-3">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                {/* <Logo limage="/images/logo.svg"
                                dimage="/images/logo-3.svg"
                                simage="/images/logo-2.svg"
                                /> */}
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="header-social-link">
                                        <ul className="social-icon-list list-unstyled">
                                            <li><a href="https://www.linkedin.com/in/harsh-gurawaliya-a9b63b1b2/"><FaLinkedin /></a></li>
                                        </ul>
                                    </li>

                                    
                                    <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
        </>
    )
}

export default HeaderThree;
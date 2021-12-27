import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked);
    };  

    const closeMenuBars = () => {
        setMenuClicked(false);
    }

    const scrollHandler = () => {
        const scrollCheck = window.scrollY > 0;
        scrollCheck ? setScroll(true): setScroll(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler)    // Removing the event listener before component unmounts to prevent a memory leak.
    }, []);

    return (
        <nav className={`navbar ${scroll ? 'sticky' : ''}`}>
            <div className="navbar--container wrapper">
                <Link to="/" className={`navbar--logo`} onClick={closeMenuBars} aria-label='Logo Link'>
                    <img src="images/laundry-runner-logo.png" alt="Laundry Runner" />
                </Link>
                <div className="menu--icon" onClick={handleClick}>                   
                    <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />        
                </div>
                
                <ul className={menuClicked ? 'nav--menu active': 'nav--menu'} >          
                    <li className="nav--item">
                        <Link to="/" className={`nav--link`} aria-label='Home Link' onClick={closeMenuBars}>
                            Home
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/services" className={`nav--link`} aria-label='Services Link' onClick={closeMenuBars}>
                            Services
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/pricing" className={`nav-link`} aria-label='Contact Link' onClick={closeMenuBars}>
                            Pricing
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/login" className={`nav-link`} aria-label='Schedule Link' onClick={closeMenuBars}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

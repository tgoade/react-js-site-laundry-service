import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked);
    };  

    const closeMenuBars = () => {
        setMenuClicked(false);
    }
    return (
        <div>
            <nav className={`navbar`}>
                <div className="navbar--container wrapper">
                    <Link to="/" className={`navbar--logo`} onClick={closeMenuBars} aria-label='Logo Link'>
                        <img src="images/laundry-runner-logo.png" alt="Laundry Runner" />
                    </Link>
                    <div className="menu--icon" onClick={handleClick}>                   
                        <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />        
                    </div>
                    
                    <ul className={menuClicked ? 'nav--menu active': 'nav--menu'} >          
                        <li className="nav--item">
                            <Link to="/" className={`nav--link`} aria-label='Home Link'>
                                Home
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/" className={`nav--link`} aria-label='Services Link'>
                                Services
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/login" className={`nav-link`} aria-label='Schedule Link'>
                                Schedule
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/" className={`nav-link`} aria-label='Contact Link'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

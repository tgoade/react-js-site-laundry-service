import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (
        <div>
            <nav className={`navbar`}>
                <div className="navbar-container wrapper">
                    <Link to="/" className={`navbar-logo`}>
                        Logo
                    </Link>
                    {/* <div className="menu-icon" onClick={handleClick}>                   
                        <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />        
                    </div> */}
                        
                            {/* <ul className={menuClicked ? 'nav-menu active': 'nav-menu'}>          
                                <li className="nav-item">
                                    <Link to="/" className={`nav-links`}>
                                        Home
                                    </Link>
                                    <Link to="/" className={`nav-links`}>
                                        Prices
                                    </Link>
                                    <Link to="/" className="nav-links-mobile" onClick={closeMenuBars}>
                                    <i className="fas fa-bars"></i><i className="fas fa-user-circle"></i>
                                    </Link>
                                </li>
                            </ul> */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar

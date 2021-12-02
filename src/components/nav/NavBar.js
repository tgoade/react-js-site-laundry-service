import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (
        <div>
            <nav className={`navbar`}>
                <div className="navbar--container wrapper">
                    <Link to="/" className={`navbar--logo`}>
                        <img src="images/laundry-runner-logo.png" alt="Laundry Runner" />
                    </Link>
                    {/* <div className="menu-icon" onClick={handleClick}>                   
                        <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />        
                    </div> */}
                        
                    <ul className="nav--link-wrap">          
                        <li className="nav--item">
                            <Link to="/" className={`nav--link`}>
                                Home
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/" className={`nav--link`}>
                                Services
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/login" className={`nav-link`}>
                                Schedule
                            </Link>
                        </li>
                        <li className="nav--item">
                            <Link to="/" className={`nav-link`}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

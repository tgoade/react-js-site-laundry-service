import './Button.css';
import { Link } from 'react-router-dom';


const Button = ({ children, onClick, path, buttonSize, ariaLabel="", className="" }) => {

    const size = ['btn--large', 'btn--medium', 'btn--small'];

    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0];

    return (
        <Link to={path} className="btn--mobile">
            <button className={`${checkButtonSize} ${className}`} aria-label={ariaLabel} onClick={onClick} >         {/* The curly braces in JSX means process the inner value in JavaScript instead of a string like with quotes. ex. variables */}
                {children}                                                                                          {/* ${} is a JS ES6 feature. Here, it's used to concatenate a string with the value of a js expression. `string ${expression}` = 'string ' + expression */}
            </button>
        </Link>
    )
};

export default Button;
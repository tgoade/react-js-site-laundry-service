import "./AuthPanel.css";

const AuthPanel = ({children, className=""}) => {
    return (
        <div className={`billboard ${className}`} role="main">
            {children}
        </div>
    )
}

export default AuthPanel;
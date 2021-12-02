import "./AuthPanel.css";

const AuthPanel = ({children, className=""}) => {
    return (
        <div className={`billboard ${className}`}>
            {children}
        </div>
    )
}

export default AuthPanel;
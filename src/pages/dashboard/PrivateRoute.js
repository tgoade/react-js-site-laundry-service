import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// Creating a wrapper for our current route
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();          // Pointing to that currentUser state within our Context 

    return(
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route
            {...rest} render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />        
            }}
        ></Route>
    )
}

export default PrivateRoute;
import { useState } from "react";
import { Card, Alert } from 'react-bootstrap';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
//import Button from "../button/Button";

const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function logoutHandler(){
        setError('');

        try {
          await logout();
          history.push('/login');
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="w-100 text-center mb-4">
                        <strong>Email: </strong> {currentUser.email}
                    </div>
                    {/* <Button path="/update-profile" buttonSize="btn--small" className="w-100">Update Profile</Button> */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center">
                <Link to="" onClick={logoutHandler}>Log Out</Link>
            </div>
        </>
    )
}

export default Dashboard;
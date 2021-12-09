import { useState } from "react";
import { Card, Alert } from 'react-bootstrap';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthPanel from "../../components/hero/AuthPanel";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css"
import TimesPanel from "./TimesPanel";

const Dashboard = () => {
    const initialState = null;
    const [error, setError] = useState(initialState);
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const [date, setDate] = useState(initialState);
    
    async function logoutHandler(){
        setError('');

        try {
          await logout();
          history.push('/login');
        } catch {
            setError('Failed to log out')
        }
    }

    const timeslots = ['8:00 AM – 10:00 AM','10:00 AM – 12:00 PM','12:00 PM – 2:00 PM','2:00 PM – 4:00 PM','4:00 PM – 6:00 PM']

    const randomTimes = Math.floor(Math.random() * timeslots.length);

    const dateHandler = (date) => {
        console.log(date);
        setDate(date);
    }
    const clearState = () => {
        setDate(initialState);
    }

    return (
        <AuthPanel>
            <Card id="dashboard">
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="w-100 text-center mb-4 intro">
                        <p><span>Hello{currentUser.firstName}!</span> ({currentUser.email})</p>
                        <p><span>Please select a pickup date and time</span></p>
                    </div>
                    {/* <Button path="/update-profile" buttonSize="btn--small" className="w-100">Update Profile</Button> */}
                    
                    <TimesPanel date={date} timeslots={timeslots} randomTimes={randomTimes}/>
                    
                    <Calendar onChange={dateHandler} value={date} />
                    
                </Card.Body>
            </Card>
            <div className="w-100 text-center crosslink">
                {date && <Link to="/dashboard" onClick={clearState}>Cancel</Link>}
                <Link to="" onClick={logoutHandler}>Log Out</Link>
            </div>
        </AuthPanel>
    )
}

export default Dashboard;
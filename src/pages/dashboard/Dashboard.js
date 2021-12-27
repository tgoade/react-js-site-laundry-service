import { useState } from "react";
//import { Card, Alert } from 'react-bootstrap';
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
    const { firstName, logout } = useAuth();
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
            <div class="card" id="dashboard">
                <div class="card-body">
                    <h3 className="text-center mt-2 mb-3">Hi {firstName}!</h3>
                    {error && <div class="alert" variant="danger">{error}</div>}
                    <div className="w-100 text-center mb-4 intro">
                        <p>Please select a pickup date and time for your laundry to be picked up.</p>
                    </div>
                    {/* <Button path="/update-profile" buttonSize="btn--small" className="w-100">Update Profile</Button> */}
                    
                    <TimesPanel date={date} timeslots={timeslots} randomTimes={randomTimes}/>
                    
                    <Calendar onChange={dateHandler} value={date} />
                    
                </div>
            </div>
            <div className="w-100 text-center crosslink">
                {date && <Link to="/dashboard" onClick={clearState}>Cancel</Link>}
                <Link to="" onClick={logoutHandler}>Log Out</Link>
            </div>
        </AuthPanel>
    )
}

export default Dashboard;
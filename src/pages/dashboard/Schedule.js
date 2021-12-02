import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Form } from 'react-bootstrap';
//import Button from "../../components/button/Button";
import Axios from "axios";

const Schedule = () => {
    const [loading, setLoading] = useState(false);
    const { uid } = useAuth();

    function submitHandler(userID){
        return e => {
        e.preventDefault();
        console.log(`uid with submitHandler: ${uid}`); 
        setLoading(true);
        Axios.post("https://app-bootcamp-davidgoade.twiliobootcamp.repl.co/pickup", { uid: uid })
            .then(res => { console.log(res.data) })
            .catch(error => { console.error("There's an error:", error)})
        }
    }
    
    return (
        
        <Form onSubmit={submitHandler(uid)}>
            <button disabled={loading} className="btn--medium w-100" type="submit">Schedule Pickup Now</button>
        </Form>
        
    )
}

export default Schedule;
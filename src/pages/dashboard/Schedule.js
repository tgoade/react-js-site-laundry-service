import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
//import { Form } from 'react-bootstrap';
import Axios from "axios";

const Schedule = () => {
    const [loading, setLoading] = useState(false);
    const { uid } = useAuth();

    function submitHandler(uid){
        return e => {
        e.preventDefault();
        console.log(`uid with submitHandler: ${uid}`); 
        setLoading(true);
        Axios.post("https://LooseVoluminousLocation.davidgoade.repl.co/pickup", { uid: uid })
            .then(res => { console.log(res.data) })
            .catch(error => { console.error("There's an error:", error)})
        }
    }
    // https://app-bootcamp-davidgoade.twiliobootcamp.repl.co/pickup
    // https://LooseVoluminousLocation.davidgoade.repl.co/pickup
    return (
        
        <form onSubmit={submitHandler(uid)}>
            <button disabled={loading} className="btn--medium w-100" type="submit">Schedule Pickup Now</button>
        </form>
        
    )
}

export default Schedule;
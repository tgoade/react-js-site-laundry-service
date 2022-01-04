
import { useRef, useState } from "react";
//import { Form, Card, Alert } from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import "../signup/SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import AuthPanel from "../../components/hero/AuthPanel";
import Card from "../../components/card/Card";

const ForgotPassword = () => {
    const emailRef = useRef();                      
    const { resetPassword } = useAuth();          
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your email for further instructions');
        } catch {
            setError('Failed to reset password');
        }

        setLoading(false);
    }

    return (
        <AuthPanel>
          <Card title="Password Reset">
                {error && <div class="alert" variant="danger">{error}</div>}
                {message && <div class="alert" variant="success">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" class="form-control mt-2" placeholder="Enter your email to reset password" id="email" ref={emailRef} required />
                    </div>
                    
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Reset Password</button>
                </form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Log In</Link>
                </div>
          </Card>
          <div className="w-100 text-center mt-2 crosslink">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> 
        </AuthPanel>
    )
} 

export default ForgotPassword;



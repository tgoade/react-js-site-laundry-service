
import { useRef, useState } from "react";
import { Form, Card, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../signup/SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

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
        <>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Reset Password</button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> 
        </>
    )
} 

export default ForgotPassword;



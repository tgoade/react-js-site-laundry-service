import { useRef, useState } from "react";
import { Form, Card, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../signup/SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();                      // Using refs to access email input DOM element to read the input value, which could be accessed as emailRef.current.value
    const passwordRef = useRef();
    const { login } = useAuth();           // Pointing that signup function from the AuthContext file so we can use that as a part of our form
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/dashboard');
        } catch {
            setError('Failed to log in');
        }

        setLoading(false);
    }

    return (
        <>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Log In</button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> 
        </>
    )
} 

export default Login;

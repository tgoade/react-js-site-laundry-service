import { useRef, useState } from "react";
import { Form, Card, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
    const emailRef = useRef();                      // Using refs to access email input DOM element to read the input value, which could be accessed as emailRef.current.value
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();           // Pointing that signup function from the AuthContext file so we can use that as a part of our form
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match.')          // We return because we want to exit out if there's an error
        }

        // Waits for the signup to finish, and if there's a failure, it'll go into the catch block

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/dashboard');
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
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
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Sign Up</button>
                </Form>
            </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div> 
        </>
    )
} 

export default Signup;

import { useRef, useState } from "react";
import { Form, Card, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../signup/SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import AuthPanel from "../../components/hero/AuthPanel";

const Login = () => {
    const emailRef = useRef();                      
    const passwordRef = useRef();
    const { login, errorLogin } = useAuth();                    // Pointing that login function within the Context 
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push('/dashboard');
        
        setLoading(false);
    }

    return (
        <AuthPanel>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {errorLogin && <Alert variant="danger">{errorLogin}</Alert>}
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
          <div className="w-100 text-center mt-2 crosslink">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> 
        </AuthPanel>
    )
} 

export default Login;

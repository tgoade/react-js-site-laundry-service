import { useRef, useState } from "react";
import { Form, Card, Row, Col, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import AuthPanel from "../../components/hero/AuthPanel";

const Signup = () => {
    const emailRef = useRef();                      // Using refs to access email input DOM element to read the input value, which could be accessed as emailRef.current.value
    const passwordRef = useRef();
    //const passwordConfirmRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const { signup } = useAuth();                   // Pointing that signup function within the Context 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    

    async function handleSubmit(e){
        e.preventDefault();
        
        setError('');

        // To validate phone # input
        function validPhone(num){
            let phoneNoFormat = /^(1\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
            return phoneNoFormat.test(num)
        }
        console.log(validPhone(phoneRef.current.value));

        if (!validPhone(phoneRef.current.value)) {
            return setError(() => 'Please enter a valid phone number');
        }

        // To validate the password fields

        // if (passwordRef.current.value !== passwordConfirmRef.current.value){
        //     return setError('Passwords do not match.')          // We return because we want to exit out if there's an error, the inputs from the two fields don't match
        // }

        // Waits for the signup to finish, and if there's a failure, it'll go into the catch block

        try {
            setError('');
            setLoading(true);                                                       // Setting loading to true so that we can use this to disable our signup button during processing so that the user doesn't keep clicking on it, creating multiple accounts.
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value, phoneRef.current.value);        // Passing in the user input values into that signup function in AuthContext.js
            
            history.push('/dashboard');                                             // Using the useHistory hook to redirect us to the dashboard when login is done.
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <AuthPanel>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className="mt-3" >
                        <Form.Control type="email" placeholder="Email" ref={emailRef} required />
                    </Form.Group>
                    <Row className="mt-3" >
                        <Form.Group as={Col} id="password">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                        </Form.Group>
                        {/* <Form.Group as={Col} id="password-confirm" >
                            <Form.Control type="password" placeholder="Password Confirmation" required />
                        </Form.Group> */}
                    </Row>
                    <Row className="mt-3" >
                        <Form.Group as={Col}>
                            <Form.Control placeholder="First name" ref={firstNameRef} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control placeholder="Last name" ref={lastNameRef} />
                        </Form.Group>
                    </Row>
                    <Form.Group id="phone" className="mt-3" >
                        <Form.Control type="tel" maxLength="16" placeholder="Cell Phone Number" ref={phoneRef} />
                    </Form.Group>
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Sign Up</button>
                </Form>
            </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2 crosslink">
            Already have an account? <Link to="/login">Log In</Link>
          </div> 
        </AuthPanel>
    )
} 

export default Signup;

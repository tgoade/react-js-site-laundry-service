import { useRef, useState } from "react";
import { Form, Card, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import "./SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
    const emailRef = useRef();                      // Using refs to access email input DOM element to read the input value, which could be accessed as emailRef.current.value
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();           // Pointing that signup function from the AuthContext file so we can use that as a part of our form
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match.')          // We return because we want to exit out if there's an error
        }

        // If the email has changed, we call that updateEmail function in AuthContext with the current email and adding it to the array of promises (because we want to do all these promises at once, wait until they finish, before throwing an error)
        const promises = []

        setLoading(true);
        setError('');

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value !== currentUser.password){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard');                           // If successful, direct to login page
        }).catch(() => {
            setError('Failed to update account');
        }).finally(() => {                              // Runs whether we succeed or fail
            setLoading(false);
        })

    };

    return (
        <>
          <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                    </Form.Group>
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Update</button>
                </Form>
            </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
            <Link to="/dashboard">Cancel</Link>
          </div> 
        </>
    )
} 

export default UpdateProfile;

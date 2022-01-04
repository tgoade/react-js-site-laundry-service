import { useRef, useState } from "react";
//import { Form, Card, Alert } from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import "../signup/SignUp.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import AuthPanel from "../../components/hero/AuthPanel";
import Card from "../../components/card/Card";

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
          <Card title="Log In">
                {errorLogin && <div variant="danger">{errorLogin}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="email">Email</label>
                        <input class="form-control mb-3 mt-2" placeholder="janedoe@example.com" id="email" type="email" ref={emailRef} required />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input class="form-control mb-3 mt-2" placeholder="Must be at least 6 characters" type="password" ref={passwordRef} required />
                    </div>
                    <button disabled={loading} className="btn--medium w-100 mt-3" type="submit">Log In</button>
                </form>
                <div className="w-100 text-center mt-3 mb-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </Card> 
          <div className="w-100 text-center mt-2 crosslink">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> 
        </AuthPanel>
    )
} 

export default Login;

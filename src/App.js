import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/SignUp";
import './App.css';
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./pages/dashboard/PrivateRoute";
import ForgotPassword from "./pages/login/ForgotPassword";
import UpdateProfile from "./pages/dashboard/UpdateProfile";
import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";

function App() {
  return (
      <Router>
        <AuthProvider>      {/* Wrapper for Context, which is set up in AuthContext.js */}
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
            <Route path="/pricing" exact component={Pricing} />
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;

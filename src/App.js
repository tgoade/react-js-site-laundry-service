import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Signup from "./components/signup/SignUp";
import './App.css';
import Login from "./components/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/dashboard/PrivateRoute";
import ForgotPassword from "./components/login/ForgotPassword";
import UpdateProfile from "./components/dashboard/UpdateProfile";

function App() {
  return (
      <Router>
        <NavBar />
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/schedule" exact component={Schedule} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;

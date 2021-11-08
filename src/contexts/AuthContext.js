
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){                                   // Use the auth module from Firebase to create a user
        return auth.createUserWithEmailAndPassword(email, password);        // This will return a promise
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePassword(password){
        return currentUser.updatePassword(password);
    }

    useEffect(() => {                           
        const unsubscribe = auth.onAuthStateChanged(user => {       // Whenever we call the createUserWithEmailAndPassword, it's going to call setCurrentUser which sets that user for us         
            setCurrentUser(user);               // We set it inside useEffect because we only want it to run once, when we mount our component.
            setLoading(false);                  // Firebase sets local storage for you, sets tokens, so that that way, if you already have a user signed in, it will connect that user for you and it will use that onAuthStateChanged
        });                                     // The function returns a method that when we call the unsubscribe, it will unsubscribe the on/off state change event.

        return unsubscribe;             // This is going to unsubscribe us from the onAuthStateChanged listener whenever we unmount this component.

    }, []);
    
    const value = { currentUser, signup, login, logout, resetPassword, updateEmail, updatePassword }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};



import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = React.createContext();      // Creates a context object and it takes in a app/component wide state in ()

// To use Context in the app, we need to do 2 things, we need to provide it, and we need to consume it (tap into it/listen to it).

// To tap into/listen to the Context
export function useAuth() {                     // Creating a custom hook to access AuthContext with the use of the useContext hook
    return useContext(AuthContext);             // For the components to tap into Context, they have to listen to it, and this is where we use the useContext hook and then point to the Context.
}                                               // This returns the Context value

// To provide the Context, all components that are wrapped by it should have access to it
export function AuthProvider({children}) {                  
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){                                         // Using the auth module from Firebase to create a user
        return createUserWithEmailAndPassword(auth, email, password);       // Passing in thThis will return a promise
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth);
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    // function updateEmail(email){
    //     //return currentUser.updateEmail(email);
    //     return updateEmail(auth.currentUser, email);
    // }

    // function updatePassword(password){
    //     return currentUser.updatePassword(password);
    // }

    useEffect(() => {   
        const unsubscribe = onAuthStateChanged(auth, user => {       //  onAuthStateChange observes user's sign-in state. Whenever we call the createUserWithEmailAndPassword, it sets the user (from null), so we can use that user to setCurrentUser.  Firebase sets local storage for you, sets tokens, so that that way, if you already have a user signed in, it will connect that user for you.       
            setCurrentUser(user);               // We set it inside useEffect because we only want it to run once, when we mount our component.
            setLoading(false);                  // The onAuthStateChanged function takes in auth as its first parameter. It will unsubscribe the on/off state change event.
        });                                     // Setting it to the constant unsubscribe so that we can turn it off when we're done.    

        return unsubscribe;             // This is going to unsubscribe us from the onAuthStateChanged listener whenever we unmount this component.

    }, []);
    
    const value = { currentUser, signup, login, logout, resetPassword }

    return (
        <AuthContext.Provider value={value}>        {/* Used as a wrapper around all the components that should be able to tap into that context. The value contains all the info that we want to provide with our authentication. */}
            {!loading && children}                  {/* We want to make sure that we don't render any of our app until loading is finished, that Firebase is done verifying if there's a user set. */}
        </AuthContext.Provider>                     
    )
};


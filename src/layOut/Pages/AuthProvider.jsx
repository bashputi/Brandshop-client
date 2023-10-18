import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../../Firebase/Firebase.config"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const handleUpdateProfile = (name, photo) => {
        console.log(auth.currentUser);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect (() => {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubScribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signIn,
        signUp,
        googleSignIn,
        handleUpdateProfile,
        logOut
    }

    return (
          <AuthContext.Provider value={authInfo}>
                {children}
          </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
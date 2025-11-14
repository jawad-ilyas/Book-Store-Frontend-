import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

const googleProivder = new GoogleAuthProvider();

// authprovider
export const AuthProider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // register a user

    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProivder)
    }


    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            console.log("user into auth ", user?.email)
            if (user) {

                const { uid, email, displayName, photoURL } = user;

                const userData = {
                    email,
                    _id: uid,
                    userName: displayName,
                    photo: photoURL
                }
                setCurrentUser(userData); // <------ FIX
            } else {
                setCurrentUser(null); // User logged out
            }

            setLoading(false);

        });

        return () => unsubscriber()
    }, [])

    const value = { currentUser, registerUser, loginUser, signInWithGoogle, logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


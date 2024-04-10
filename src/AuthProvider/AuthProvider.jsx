import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [loding, setLoding] = useState(true)
    //create user
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    //google login
    const googleLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, githubProvider)
    }


    // logout
    const logout = () => {
        setUserInfo(null);
        setLoding(true);
        signOut(auth)
    }

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user)
                setLoding(false);
            }
        });
        return () => {
            unSubscribe()
        }
    }, []);

    const userUpdate=(name, photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const user = auth.currentUser;
    

    const allValues = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        userInfo,
        loding,
        user,
        userUpdate,

    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext=createContext(null);

const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);
    console.log(userInfo)
    //create user
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    //google login
    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin=()=>{
        return signInWithPopup(auth, githubProvider)
    }


    // logout
    const logout =()=>{
        setUserInfo(null);
        signOut(auth)
    }

    //observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user)
            } 
          });
    }, [])

    const allValues={
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        userInfo,


    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
  const auth = getAuth(app);



const AuthProvider = ({children}) => {
     const [user, setUser]= useState(null);
    
    console.log(user)


     const createNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
     };

     const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
     }

     const SingOut =()=>{
        return signOut(auth);
     }


     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }

     }, []);








    const authInfo ={
          user,
          setUser,
          createNewUser,
          SingOut,
          userLogin
    };


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import { createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import toast from "react-hot-toast";
import { app } from '../Firebase/Firebase.config';



export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    // Auth StatesE
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [userEmail,setUserEmail] = useState('')
    const auth = getAuth(app)

    const Provider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }
    const registerWithPassword = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateNameAndPhoto = (name,photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    console.log(user);
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[auth])


    const saveUserToDb = (name,email) => {

        const user = { name,email };
        console.log(name,email + 'from context');
        fetch(`https://teeth-cares-server.vercel.app/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // getUserToken(user.email);
                    setUserEmail(user.email);
                    toast.success("User added successfully");
                }

            }).catch((err) => {
                console.log(err);
            });
    };


    const dataInfo = {}

    const userInfo = {
        loginWithGoogle,
        logOut,loginWithEmail,updateNameAndPhoto,registerWithPassword,user,loader: loading,loading,setLoading,userEmail,saveUserToDb
    }
    return (
        <UserContext.Provider value={userInfo}>
            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;
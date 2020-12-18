import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../red-onion.config';

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const [user, setUser] = useState(null);

   
    const getUser = user => {
        const {displayName, email, photoURL} = user;
        return {
            name: displayName,
            email,
            photo: photoURL
        }
    }
    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();

       return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const signedInUser = getUser(res.user);
            setUser(signedInUser);
            return res.user;
        })
        .catch( err => {
            setUser(null);
            console.log(user);
            return err.message;
        })

    }
    const signOut = () => {
        return firebase.auth().signOut().then(function() {
            setUser(null);
            return true;
          }).catch(function(error) {
            console.log(error);
            return false;
          });
    }

    return {
        user,
        signInWithGoogle,
        signOut,
    }
    
};

export default Auth;
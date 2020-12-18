import React from 'react';
import './GoogleSignIn.css';
import Auth from './../useAuth';

const GoogleSignIn = () => {

    const auth = Auth();
    console.log(auth.signInWithGoogle); 
    const handelSignIn = () => {
        auth.signInWithGoogle();
       
        // .then( res => {
            
        // })
        
    }
    console.log(auth.user);
    const handelSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/Login';
        })
    }
    return (
        <div>
            
              {
                auth.user ?   
                <div>
                    <button onClick={handelSignOut}>Sign Out</button>
                </div> :
                <div className="googleSignInBtn">
                <a className="btn btn-outline-dark" role="button" onClick={handelSignIn} >
                    <img className="googleBtnImg"  alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    Login with Google
                </a>
               </div>
              } 
        </div>
        
    );
};

export default GoogleSignIn;
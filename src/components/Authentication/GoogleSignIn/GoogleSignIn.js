import React from 'react';
import './GoogleSignIn.css';

const GoogleSignIn = () => {
    return (
        <div>
            
                <div className="googleSignInBtn">
                    <a className="btn btn-outline-dark" role="button" >
                        <img className="googleBtnImg"  alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Login with Google
                    </a>
                </div>
        </div>
        
    );
};

export default GoogleSignIn;
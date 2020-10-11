import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from '@material-ui/core';
import  {UserContext}  from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import logo from '../../images/logos/Group 1329.png';
import './Login.css'
firebase.initializeApp(firebaseConfig);

export const handleSignOut = () => {
  return firebase.auth().signOut().then(function () {
    const SignOutUser ={
      isSignIn:false,
      firstName:"",
      email:"",
      error:"",
      success:false
    }
    return SignOutUser
  }).catch(function (error) {

  });
  
}

const LogIn = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
 
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState(
    {
      error: "",
      email: "",
      isSignIn: false,
      password: "",
      img: "",
      name: "",
      

    }
   );
 
// Google sign in Configuration
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      
      const { email, photoURL,displayName } = result.user
      const signInObj = {
        name: displayName,
        email: email,
        img: photoURL,
        isSignIn: true,
        error: "",
        success: false
      }
      setUser(signInObj)
      setLoggedInUser(signInObj);
      history.replace(from);

    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }


  
   

  const logoStyle ={
    width:"300px",
    margin:"auto" ,
    display: "block"
  }

  const googleStyle= {
    outline: "none", 
    marginRight: "20px" 
  }
  return (

    
    <div>
   

        <Link to="/"><img src={logo} alt="" style={logoStyle}/></Link>
    <div className="container shadow-lg p-4 mb-5 bg-white rounded" style={{ width: "350px", textAlign: "center" }}>
    

           <br/>

      <h3 >Log in With Google</h3>
      <br />

   <button style={googleStyle} onClick={handleSignIn}><img style={{ height: "50px" }} src="https://i.ibb.co/V30SPbC/download.png" alt="google" /></button>
  

  
    </div >
    </div>


);}


export default LogIn;

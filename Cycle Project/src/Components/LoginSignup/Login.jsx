import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png'; 
import Home from '../../Pages/Home';
// import {app} from ""

// const Login = ({toggleAuth,setToggleAuth}) => {
const Login = () => {
    const[action,setAction]=useState("Login");
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    let auth=getAuth();

   
    let googleProvider=new GoogleAuthProvider();
   
    const navigate = useNavigate();
    console.log(email,password)
   
     const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
    console.log('first');
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    navigate('/');
    
  } catch (error) {
    alert(error.message);
  }
};

    const handleComponent = () => {
        navigate('/SignUp');
       
      };
    return (
        <div className='container'>
         
            <div className="header">
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            <div className="input">
                <img src={email_icon} alt="" />
                    <input  className="mail" type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                    <input className="pass" type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            </div>
            <div className='submit-container'>
            <button className= "loginbtn" onClick={handleLogin}>Login</button>
           
            <button className= "accbtn" onClick={handleComponent}>Sign Up</button>
            </div>
    
        </div>
      )
}

export default Login

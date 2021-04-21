import React, { useContext, useState } from 'react';
import image from '../../images/image/home_img.jpg'
import google from '../../images/Icon/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useForm } from "react-hook-form";
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let user={
        name:'',
        email:'',
        password:'',
        image:'',
        isSigned: false
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        user=data;
        console.log('user: ',user);

        //signup user
        if(!login){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
                user.isSigned=false;
                updateUser();
                console.log('new user:', user)
                setLogin(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error: ', errorMessage)
            });
        }

    //sign in user
    if(login){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            var signInuser = userCredential.user;
            signInuser.isSigned=true;
            console.log('signin user: ',signInuser);
            setLoggedInUser(signInuser);
            history.replace(from);
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log('error: ', errorMessage)
        });
    }

    //update user info
    const updateUser= () => {
        var newUser = firebase.auth().currentUser;
        newUser.updateProfile({
        displayName: user.name
        }).then(function() {
        console.log('username Update successful.') 
        }).catch(function(error) {
        // An error happened.
        });
    }
    };

    //google signin
    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                user.isSigned=true;
                console.log('Signin Info: ', user);
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log('Error: ', errorMessage);
            });
            
    }

    
    const[login, setLogin]=useState(true);
    return (
        <div>
            <div style={{ backgroundColor: '#9b7a67', height: '650px' }} className="row">
                <div  className="col-md-6">
                   {login && <form  className='login-form' onSubmit={handleSubmit(onSubmit)}>
                        <h3 style={{color: 'white', paddingTop:'20px'}}>Login</h3><br></br>
                        <input class='form-control' name="email" placeholder="Email" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}<br></br>
                        <input class='form-control' type='password' name="password" placeholder="Password" ref={register({ required: true })} />
                        {errors.password && <span>This field is required</span>}<br></br>
                        <input type="submit" value="Login" class="btn btn-prime"/>
                        <p style={{color:'white'}}>Don't Have an Account? <span style={{color:'lightgreen', cursor:'pointer'}}  onClick={()=>setLogin(false)}>Create Here</span></p>
                    </form>}
                    {!login && <form  className='login-form' onSubmit={handleSubmit(onSubmit)}>
                        <h3 style={{color: 'white'}}>Create Account</h3><br></br>
                        <input class='form-control' name="name" placeholder="Name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}<br></br>
                        <input class='form-control' name="email" placeholder="Email" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}<br></br>
                        <input class='form-control' type='password' name="password" placeholder="Password" ref={register({ required: true })} />
                        {errors.password && <span>This field is required</span>}<br></br>
                        <input type="submit" value="Signup" class="btn btn-prime"/>
                        <p style={{color:'white'}}>Already have an Account? <span style={{color:'lightgreen', cursor:'pointer'}} onClick={()=>setLogin(true)}>Login Here</span></p>
                    </form>}
                    <br></br>
                    <div style={{textAlign: 'center'}}>
                        <p style={{color:'white'}}>OR</p>
                        <button  onClick={handleGoogleSignin} className="btn btn-prime"><img style={{ height: '30px' }} src={google} alt="" /> Continue With Google</button>
                    </div>
                </div>
                <div style={{ paddingTop: '10px'}}className="col-md-6 d-flex justify-content-center align-items-center">
                    <img class='img-fluid' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
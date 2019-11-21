import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css'

import paperbird from './paper-bird.png'
import firebase from 'firebase'
import {firebaseConfig} from './components/Firebase'

firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.FacebookAuthProvider()

export const Splash = () => {
  return (
    <div className="splash-container">
      <img src={paperbird} alt='bird in nest'></img>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

// const facebookSignin = () => {
//   firebase.auth().signInWithRedirect(provider);
// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
// }

const facebookSignin = () => firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});




import React from 'react';
import troll from './troll.png';
import firebase from 'firebase'
import {firebaseConfig} from './components/Firebase'

firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.FacebookAuthProvider()

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
export const Splash = () => {
  return (
    <div className="splash-container">
      <img src={troll} alt="cute troll"></img>
    <button type='submit' onClick={facebookSignin}>Sign in with FB</button> 
      <h1>Cindr</h1>
    </div>
  );
};

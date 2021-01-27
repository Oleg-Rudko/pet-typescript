import React from "react";
import "firebase/auth";
import firebase from "firebase/app";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import App from "../App";

const Auth = () => {
  return (
    <>
      <FirebaseAuthConsumer>
        {({ isSignedIn }) => {
          if (isSignedIn === true) {
            return <App />;
          } else {
            return (
              <>
                <button
                  onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                  }}
                >
                  Sign In with Google
                </button>
              </>
            );
          }
        }}
      </FirebaseAuthConsumer>
    </>
  );
};

export default Auth;

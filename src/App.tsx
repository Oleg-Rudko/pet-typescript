import React from "react";
import firebase from "firebase/app";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/scss/index.scss";
import Auth from "./Auth/Auth";
import store from "./store";
import firebase from "firebase/app";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import "firebase/auth";
import { config } from "./firebase/config";

const Root = () => (
  <FirebaseAuthProvider firebase={firebase} {...config}>
    <Provider store={store}>
      <HashRouter>
        <Auth />
      </HashRouter>
    </Provider>
  </FirebaseAuthProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

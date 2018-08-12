import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from './App';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDNvogcMuhVl5WKeM5KV8-FavJnSoVcp7Y",
    authDomain: "fir-68cc1.firebaseapp.com",
    databaseURL: "https://fir-68cc1.firebaseio.com",
    projectId: "fir-68cc1",
    storageBucket: "fir-68cc1.appspot.com",
    messagingSenderId: "554410383271"
  };
firebase.initializeApp(config);
const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

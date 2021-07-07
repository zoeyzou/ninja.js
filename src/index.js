import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import users from "./users.json";

/* var userData = JSON.parse(document.getElementById('user-data').dataset.users); */
var userData = users;
ReactDOM.render(<App rows={userData} />, document.getElementById("root"));

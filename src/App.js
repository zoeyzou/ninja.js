import React from "react";
import DataTable from "./DataTable";
import "./App.css";

import users from "./users.json";

const App = () => {
  var userData = users;
  return (
    <div className="container mt-3">
      <DataTable locale="da" rowsFromParent={userData} rowsPerPage={5} />
    </div>
  );
};

export default App;

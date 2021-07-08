import React from "react";
import DataTable from "./DataTable";
import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <DataTable locale="da" rowsPerPage={5} />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import DataTable from "./DataTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <DataTable locale="da" rows={this.props.rows} rowsPerPage={5} />
      </div>
    );
  }
}

export default App;

import React, { useState, useEffect } from 'react';
import DataTable from './containers/DataTable';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(document.getElementById('user-data').dataset.users);
    setUserData(data);
  }, []);

  return <DataTable rows={userData} rowsPerPage={5} />;
};

export default App;

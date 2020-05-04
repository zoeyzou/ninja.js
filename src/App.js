import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(document.getElementById('user-data').dataset.users);
    setUserData(data);
  }, []);

  return (
    <div className='container mt-3'>
      <DataTable rows={userData} locale='da' rowsPerPage={5} />
    </div>
  );
};

export default App;

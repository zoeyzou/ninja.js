import React ,{useState,useEffect} from 'react';
import { Index } from './DataTable/index';
import _ from 'lodash';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);
  const [rowsInPage, setRowsInPage] = useState([]);
  const rowsPerPage = 5;

  useEffect (() => {
      (async() => { 
        const response = await fetch('tableData.json')
        const data = await response.json()
        setRows(data);
        setRowsInPage(_(data).slice(0).take(rowsPerPage).value());
      })()
   },[])

  return (
    <div className="container mt-3">
      <Index
        rows = {rows}
        rowsInPage = {rowsInPage}
        rowsPerPage = {rowsPerPage}
        setRowsInPage = {setRowsInPage}
        locale="da"
      />
    </div>
  )
}


export default App;

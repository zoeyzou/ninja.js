import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";
import users from "./user-data.json";

const DataTable = ({ rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(users);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState();

  useEffect(() => {
    calculateTotalNumberOfPages(rows);
  }, [rows]);

  const calculateTotalNumberOfPages = (rows) => {
    if (rowsPerPage === 0) setTotalNumberOfPages(0);

    setTotalNumberOfPages(Math.ceil(rows.length / rowsPerPage));
  };

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = users;

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }
    setRows(rowsFound);
    setCurrentPageNumber(0);
    calculateTotalNumberOfPages(rowsFound);
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>
          {rows &&
            rows
              .map((row) => <Row key={row.per_id} row={row} />)
              .slice(...rowsInPageNumber(currentPageNumber))}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
};

export default DataTable;

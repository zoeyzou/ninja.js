import React, { useCallback, useEffect, useState } from "react";

import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";

const DataTable = ({ rowsFromParent, rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(rowsFromParent);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState();

  const calculateTotalNumberOfPages = useCallback(
    (rows) => {
      return rowsPerPage === 0 ? 0 : Math.ceil(rows.length / rowsPerPage);
    },
    [rowsPerPage]
  );
  useEffect(() => {
    calculateTotalNumberOfPages(rows);
  }, [calculateTotalNumberOfPages, rows]);

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = rowsFromParent;

    if (text) {
      rowsFound = rowsFromParent.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }
    setCurrentPageNumber(0);
    setRows(rowsFound);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
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
          {rows
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

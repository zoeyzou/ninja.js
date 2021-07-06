import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

const DataTable = ({ rows, rowsPerPage }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState([]);
  const [row, setRow] = useState(rows);

  const calculateTotalNumberOfPages = () => {
    if (rowsPerPage == 0) return 0;
    setTotalNumberOfPages(Math.ceil(rows.length / rowsPerPage));
  };
  useEffect(() => {
    calculateTotalNumberOfPages();
  }, []);

  const search = event => {
    const text = event.target.value;
    let rowsFound = rows;
    if (text) {
      rowsFound = rows.filter(row => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 || (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1);
      });
      setRow(rowsFound);
    }
  };

  const changeToPageNumber = pageNumber => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = pageNumber => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = row.map(row => <Row key={row.per_id} row={row} />).slice(...rowsInPageNumber(currentPageNumber));
  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} totalNumberOfPages={totalNumberOfPages} onChange={changeToPageNumber} />
    </div>
  );
};

export default DataTable;

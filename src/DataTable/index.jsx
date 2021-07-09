import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

const DataTable = ({ rows, rowsPerPage }) => {
  const [row, setRow] = useState(rows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  const calculateTotalNumberOfPages = () => {
    if (rowsPerPage !== 0) {
    setTotalNumberOfPages(Math.ceil(rows.length / rowsPerPage));
    }
  };

  useEffect(() => {
    calculateTotalNumberOfPages();
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  });

  const search = event => {
    const text = event.target.value
    let rowsFound = rows;
    if (text!==null) {
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

   const keyDownHandler = e => {
    if (e.key === 'Enter') {
      window.location.href=`http://google.com/search?q=+${e.target.value}`
    }
  }

  const rowsToRender = row.map(row => <Row key={row.per_id} row={row} />).slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} onKeyDown={keyDownHandler}/>
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} totalNumberOfPages={totalNumberOfPages} onChange={changeToPageNumber} />
    </div>
  );
};

export default DataTable;

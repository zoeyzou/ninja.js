import React, { useState } from 'react';
import _ from 'lodash';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

export function Index({ rows, rowsInPage, setRowsInPage, rowsPerPage = 40 }) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [searchInput, setSearchInput] = useState('');

  const totalNumberOfPages = rows ? Math.ceil(rows.length / rowsPerPage) : 0;
  
  const changeToPageNumber = (pageNo) => {
    setCurrentPageNumber(pageNo);
    const startIndex = (pageNo - 1) * rowsPerPage;
    const renderRows = _(rows).slice(startIndex).take(rowsPerPage).value()
    setRowsInPage(renderRows)
  }
  const onSearch = (e) => {
    setSearchInput(e.target.value)
    if (!searchInput) {
      return rows;
    }
    const results = rows.filter((row) => {
      return (row.name1 && row.name1.toLowerCase().search(searchInput.toLowerCase()) > -1 )||
        (row.email && row.email.toLowerCase().search(searchInput.toLowerCase()) > -1)
    });
    setRowsInPage(results);
  }


  
  return (
    <>
      <Search onSearch={ onSearch }/>
      <table>
        <tbody>
          {
            rowsInPage.map((row, index) => <Row key={index} row={row} />)
          }
        </tbody>
      </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={changeToPageNumber}
      />
  </>
  )
}



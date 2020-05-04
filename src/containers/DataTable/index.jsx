import React, { useState } from 'react';

import Pagination from '../../components/Pagination';
import Row from './Row';
import Search from './Search';
import {
  calculateTotalNumberOfPages,
  getSearchResult,
  getCurrentPageData,
} from './helpers';

const DataTable = ({ rows, locale, rowsPerPage = 40 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [queryString, setQueryString] = useState('');

  const filteredRows = getSearchResult(rows, queryString);
  const totalNumberOfPages = calculateTotalNumberOfPages(
    filteredRows.length,
    rowsPerPage
  );
  const currentDisplayRows = getCurrentPageData(
    filteredRows,
    currentPageNumber,
    rowsPerPage
  );

  const searchHandler = (text) => {
    setQueryString(text);
    setCurrentPageNumber(0);
  };

  const changeToPageNumber = (pageNumber) => setCurrentPageNumber(pageNumber);

  return (
    <div>
      <Search onSearch={searchHandler} />
      <table>
        <tbody>
          {currentDisplayRows.map((row) => (
            <Row key={row.per_id} row={row} />
          ))}
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

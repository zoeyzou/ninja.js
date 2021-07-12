import React from 'react';
import _ from 'lodash';

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {

  const pages = _.range(1, totalNumberOfPages + 1);

  if (totalNumberOfPages === 1) {
    return null
  }


  return(
    <ul className="pagination">
      {pages.map((page)=><Page key={page}
          currentPageNumber={currentPageNumber}
          pageNumber={page}
          onChange={onChange}  
      />)}
    </ul>
  )
}

export default Pagination

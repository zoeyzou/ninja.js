import React from 'react';

import Button from './Button';

const PaginationItem = ({ pageNumber, isActive, onChange }) => {
  const onClick = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };
  return (
    <li className='page-item mr-1'>
      <Button type={isActive ? 'outline' : 'primary'} onClick={onClick}>
        {pageNumber + 1}
      </Button>
    </li>
  );
};

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages <= 1) {
    return null;
  }

  const pageItems = Array.from({
    length: totalNumberOfPages,
  }).map((_, pageNumber) => (
    <PaginationItem
      key={pageNumber}
      pageNumber={pageNumber}
      isActive={currentPageNumber === pageNumber}
      onChange={onChange}
    />
  ));

  return <ul className='pagination'>{pageItems}</ul>;
};

export default Pagination;

export function calculateTotalNumberOfPages(totalCount, rowsPerPage) {
  if (rowsPerPage == 0) return 0;
  return Math.ceil(totalCount / rowsPerPage);
}

export function getSearchResult(data, queryString) {
  if (!queryString) {
    return data;
  }

  return data.filter(
    (row) =>
      (row.name1 &&
        row.name1.toLowerCase().includes(queryString.toLowerCase())) ||
      (row.email && row.email.toLowerCase().includes(queryString.toLowerCase()))
  );
}

export function getCurrentPageData(data, pageNumber, rowsPerPage) {
  const startIndex = pageNumber * rowsPerPage;
  return data.slice(startIndex, startIndex + rowsPerPage);
}

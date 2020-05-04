import React from 'react';

import Row from './Row';

const Table = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {tableData.map((row) => (
          <Row key={row.per_id} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

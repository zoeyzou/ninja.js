import React from 'react';

import Row from './TableRow';

const Table = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {tableData.map((row) => (
          <Row
            key={row.per_id}
            link={row.edit_path}
            title={row.name1}
            subtitle={row.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

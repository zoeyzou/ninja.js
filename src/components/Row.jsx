import React from 'react';

const Row = ({ row: rowData }) => (
  <tr>
    <td>
      <a href={rowData.edit_path}>{rowData.name1}</a>
      <br />
      <small>{rowData.email}</small>
    </td>
  </tr>
);

export default Row;

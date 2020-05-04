import React from 'react';

const TableRow = ({ link, title, subtitle }) => (
  <tr>
    <td>
      <a href={link}>{title}</a>
      <br />
      <small>{subtitle}</small>
    </td>
  </tr>
);

export default TableRow;

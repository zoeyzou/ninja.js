import React from 'react';
import {Link } from 'react-router-dom';

const Row = (props) => {
  const { row } = props;

  return (
    <tr>
      <td>
        <Link to={`/${row.per_id}`}>{row.name1}</Link>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

export default Row;

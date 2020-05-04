import React from 'react';

const Row = ({ link, name, email }) => (
  <tr>
    <td>
      <a href={link}>{name}</a>
      <br />
      <small>{email}</small>
    </td>
  </tr>
);

const Table = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {tableData.map((row) => (
          <Row
            key={row.per_id}
            link={row.edit_path}
            name={row.name1}
            email={row.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

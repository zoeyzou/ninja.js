import React from 'react'

const Row = ({ row }) => {

  return (
    <tr>
      <td>
        <a href={`${row.edit_path}/search?q=+${row.name1}`}>
          {row.name1}
        </a><br />
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

export default Row

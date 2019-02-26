import React from 'react';

const TableGrid = ({ tableHead, tableBody }) => {
  // determine length of tableBody to deduct how many <tr>'s to loop out
  const tableRows = new Array(tableBody.length).fill();
  console.log(tableRows);

  return (
    <div className="table-wrap mt-5 ">
      <table className="table table-bordered data-table-grid" summary="">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th scope="col">{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableRows.map((row, index) => {
            return (
              <tr>
                {tableBody.map((tablecell, index) => {
                  return index === 0 ? (
                    <th className="date" scope="row">
                      {tablecell.name}
                    </th>
                  ) : tablecell.link ? (
                    <td>
                      <a href={tablecell.link}>{tablecell.name}</a>
                    </td>
                  ) : (
                    <td>{tablecell.name}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableGrid;

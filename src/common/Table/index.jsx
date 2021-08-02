import React from "react";
import { useTable } from "react-table";
import { getStatus } from "../../utils";
import { TableStyled } from "./style";

const Table = ({ data, columns, className, onClick }) => {
  const instanceTable = useTable({ data, columns });
  
  const statusColor = (row, j) => {
    return row.cells.length - 1 === j ? getStatus(row.cells[row.cells.length - 1].value) : "" 
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    instanceTable;
  return (
    <TableStyled
      onClick={onClick}
      {...getTableProps()}
      className={"table " + className}
    >
      <thead>
        {headerGroups.map((group, i) => (
          <tr key={i} {...group.getHeaderGroupProps()}>
            {group.headers.map((column, i) => (
              <th key={i} {...column.getHeaderProps}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell, j) => (
                <td
                  data-id={data[i].id}
                  {...cell.getCellProps()}
                  style={{ color: statusColor(row, j) }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default Table;

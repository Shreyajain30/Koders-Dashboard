import React from "react";
import "./Table.css";
export default function Table({ columns, data }) {
  return (
    <table className="custom-table">
      <thead className="table-head">
        <tr>
          {columns.map((column, index) => (
            <th className={index === 0 ? "first-col" : ""} key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                className={
                  colIndex === 1
                    ? "employee-name"
                    : colIndex === 0
                    ? "rank"
                    : ""
                }
                key={colIndex}
              >
                {colIndex === 1 ? (
                  <>
                    {" "}
                    <div className="employee-logo">{row.Image}</div>
                    {row[col]}
                  </>
                ) : (
                  row[col]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

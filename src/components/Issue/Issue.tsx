import React from "react";
import { Props } from "./type";
import { useTable } from "react-table";

export default function Issue({ issue }: Props) {
  console.log('Issue(s)', issue);

  const columns = React.useMemo(
    () => [
      {
        Header: "Author",
        accessor: "author.name", // accessor is the "key" in the data
        Cell: ({ cell: { value } }: any) => <span style={{ backgroundColor: 'red' }}>{value}</span>
      },
      {
        Header: "Link",
        accessor: "web_url", // accessor is the "key" in the data
        Cell: ({ cell: { value } }: any) => <a href={value} target="_blank">GitLab Link</a>
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: issue as any });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div style={{ minWidth: "100%", border: "1px solid" }}>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <div>End of table</div>
    </div>
  );
}

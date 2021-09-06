import React from "react";
import { Props } from "./type";
import { useTable } from "react-table";
import Label from "../Label";
import styled from "styled-components";

const options = { dateStyle: 'short', timeStyle: 'short' };
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  }
`;

export default function Issue({ storiesHash, issue }: Props) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Assignee",
        accessor: "assignee.name",
      },
      {
        Header: "Link",
        accessor: "web_url",
        Cell: (props: any) => {
          return (
            <a href={props.cell.row.values.web_url} target="_blank">
              Issue {props.data[props.cell.row.index].iid}
            </a>
          )
        }
      },
      {
        Header: "Labels",
        accessor: "labels",
        Cell: ({ cell: { value } }: any) => {
          if (!value) return null;
          return value
            .filter((i: string) => !storiesHash.hasOwnProperty(i))
            .map((i: string) => (
              <Label
                key={i}
                name={i}
                color='black'
                text_color='white'
              />
            ));
        },
      },
      {
        Header: "Last Updated",
        accessor: "updated_at",
        Cell: ({ cell: { value } }: any) => `${new Intl.DateTimeFormat('en-US', options as any).format(new Date(value))}`,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: issue as any });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Styles>
      <table {...getTableProps()} style={{ borderCollapse: "collapse" }}>
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
    </Styles>
  );
}

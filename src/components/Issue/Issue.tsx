import React from "react";
import { Props } from "./type";
import { useTable } from "react-table";
import Label from "../Label";
import { useIssueStyle } from './style';

const options = { dateStyle: 'short', timeStyle: 'short' };

export default function Issue({ storiesHash, issue }: Props) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: (props: any) => {
          return (
            <a href={props.data[props.cell.row.index].web_url} target="_blank">
              {props.cell.row.values.title}
            </a>
          )
        }
      },
      {
        Header: "Assignee",
        accessor: "assignee.name",
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
                background='black'
                color='white'
                group={i}
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
  const style = useIssueStyle();

  return (
    <div className={style.root}>
      <table {...getTableProps()} className={style.table}>
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
    </div>
  );
}

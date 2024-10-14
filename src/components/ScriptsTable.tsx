import * as React from 'react'

import type { SortingState } from '@tanstack/react-table';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { unicodeName } from "unicode-name";

type ScriptEntry = {
  name: string
  code: string
  size: number
  url: string
  exampleCharacter: string
}

const columnHelper = createColumnHelper<ScriptEntry>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => <a href={info.row.original.url}>{info.getValue()}</a>,
    header: "Script Name",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('code', {
    header: "ISO 15924",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('size', {
    // cell: info => <span>{info.getValue()}</span>,
    header: "Number of Codepoints",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('exampleCharacter', {
    cell: info => <span className="c" title={unicodeName(info.getValue())}>{info.getValue()}</span>,
    header: "Example Character",
    enableSorting: false,
  }),
]

export function UnicodeScriptsTable({data}) {
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: 'size',
      desc: true,
    },
  ])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    state: {
      sorting
    },
    enableSortingRemoval: false,
  })

  return (
      <table className="table-all-left">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                 <th key={header.id} colSpan={header.colSpan}>
                 {header.isPlaceholder ? null : (
                   <div
                     className={
                       header.column.getCanSort()
                         ? 'cursor-pointer select-none'
                         : ''
                     }
                     onClick={header.column.getToggleSortingHandler()}
                   >
                     {flexRender(
                       header.column.columnDef.header,
                       header.getContext()
                     )}
                     {{
                       asc: ' ⬆︎',
                       desc: ' ⬇︎',
                     }[header.column.getIsSorted() as string] ?? null}
                   </div>
                 )}
               </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  )
}

import * as React from 'react'

import type { SortingState } from '@tanstack/react-table';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { uPlus } from "../lib/support";
import { unicodeName } from "../lib/unicode_name";
import { unicodeNumberString, listUnicodeNumberCharacters } from "unicode-number"

type UnicodeNumberEntry = {
  codepoint: number
  character: string
  numericValue: string
  name: string
}

const allNumbers: UnicodeNumberEntry[] = listUnicodeNumberCharacters().map((char) => {
    const codepoint = char.codePointAt(0)
    return {
      codepoint: codepoint,
      character: char,
      numericValue: unicodeNumberString(char),
      name: unicodeName(codepoint),
    }
  })

const columnHelper = createColumnHelper<UnicodeNumberEntry>()

const columns = [
  columnHelper.accessor('codepoint', {
    cell: info => <span className="u">{uPlus(info.getValue())}</span>,
    header: "Codepoint",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('character', {
    cell: info => <span className="c">{info.getValue()}</span>,
    header: "Character",
    enableSorting: false,
  }),
  columnHelper.accessor('numericValue', {
    cell: info => <span className="nv">{info.getValue()}</span>,
    header: "Value",
    sortingFn: "alphanumeric",
    sortDescFirst: false
  }),
  columnHelper.accessor('name', {
    header: "Name",
    sortingFn: "basic",
    sortDescFirst: false
  }),
]

export function UnicodeNumbersTable() {
  const [data, _setData] = React.useState(() => [...allNumbers])
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: 'codepoint',
      desc: false,
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
      <table className="table-15-15-15-X table-all-left">
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



// import { Grid } from 'gridjs-react';

// import { html } from "gridjs";
// import { uPlus, registerShake } from "../lib/support";
// import UNICODE_DATA_NUMERIC_VALUE from "../../data/numeric_value.json";
// import { unicodeName } from "../lib/unicode_name";
// import { unicodeNumber } from "../lib/unicode_number";

// export default function UnicodeNumbersTable() {
// return <Grid
// columns={[
//   {
//     name: "Unicode Character",
//     sort: false,
//     formatter: (char) => html(`<span class="c">${char}</span>`),
//   },
//   "Codepoint",
//   "Numerical Value",
//   "Name",
// ]}
// data={Object.keys(UNICODE_DATA_NUMERIC_VALUE).map((codepointAsString) => {
//   const codepoint = parseInt(codepointAsString, 10);
//   return [
//     String.fromCharCode(codepoint),
//     uPlus(codepoint),
//     unicodeNumber(codepoint),
//     unicodeName(codepoint),
//   ];
// })}
// search={true}
// sort={true}

// />
// }
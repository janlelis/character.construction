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
import { unicodeName } from "unicode-name";

type AsciiRow = {
  codepoint: number
  character: string
  name: Array<string>
}

const codepointToEntry = (codepoint) : AsciiRow => {
  const character = String.fromCodePoint(codepoint)
  const name = unicodeName(character)
      return {
        codepoint,
        character,
        name,
      }
}


const columnHelper = createColumnHelper<AsciiRow>()

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
  columnHelper.display({
    cell: props => <span className="nv">{props.row.original.codepoint}</span>,
    id: "decimal",
    header: "Decimal",
  }),
  columnHelper.display({
    cell: props => <span className="nv">0{props.row.original.codepoint.toString(8)}</span>,
    id: "octal",
    header: "Octal",
  }),
  columnHelper.display({
    cell: props => <span className="nv">0b{props.row.original.codepoint.toString(2)}</span>,
    id: "binary",
    header: "Binary",
  }),
  columnHelper.accessor('name', {
    header: "Name",
    sortingFn: "basic",
    sortDescFirst: false
  }),
]

export function AsciiTable() {
  const codepoints = Array.from({length: 95}, (_, i) => i + 32)
  const [data, _setData] = React.useState<AsciiRow[]>((codepoints || []).map((cp) => codepointToEntry(cp)))
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
      <table className="table">
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

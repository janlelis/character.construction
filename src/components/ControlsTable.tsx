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
import { unicodeName, unicodeAliases } from "unicode-name";

type UnicodeControlEntry = {
  codepoint: number
  decimal: number
  character: string
  abbreviation: Array<string>
  name: Array<string>
}

const codepointToEntry = (codepoint) : UnicodeControlEntry => {
  const character = String.fromCodePoint(codepoint)
      const aliases = unicodeAliases(character)
      const abbreviation = aliases.abbreviation
      const name = [...(aliases.control || [] ), ...(aliases.figment || [] )]
      return {
        codepoint,
        decimal: codepoint,
        character,
        abbreviation,
        name,
      }
}

const getControlSymbol = (codepoint) => {
  return codepoint === 127 ? "␡" : codepoint < 127 ? String.fromCodePoint(9216 + codepoint) : ""
}

const columnHelper = createColumnHelper<UnicodeControlEntry>()

const columns = [
  columnHelper.accessor('codepoint', {
    cell: info => <span className="u">{uPlus(info.getValue())}</span>,
    header: "Codepoint",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('decimal', {
    cell: info => <span className="nv">{info.getValue()}</span>,
    header: "Decimal",
    sortingFn: "alphanumeric",
    sortDescFirst: false
  }),
  columnHelper.accessor('abbreviation', {
    cell: info => [getControlSymbol(info.row.original.codepoint), ...info.getValue()].map((name) => <div>{name}</div>),
    header: "Symbol",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('name', {
    cell: info => (info.getValue() || []).map((name) => <div>{name}</div>),
    header: "Name",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('character', {
    cell: info => <span className="c">{info.getValue()}</span>,
    header: "Character",
    enableSorting: false,
  }),
]

export function ControlsTable({codepoints}) {
  const [data, setData] = React.useState<UnicodeControlEntry[]>((codepoints || []).map((cp) => codepointToEntry(cp)))
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: 'codepoint',
      desc: false,
    },
  ])

  React.useEffect(()=> {
    setData((codepoints || []).map((cp) => {
      return codepointToEntry(cp)
    }))
  }, [codepoints])

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

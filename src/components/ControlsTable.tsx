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

const ESCAPES = {
  0: '\\0',
  7: '\\a',
  8: '\\b',
  9: '\\t',
  10: '\\n',
  11: '\\v',
  12: '\\f',
  13: '\\r',
}

type UnicodeControlEntry = {
  codepoint: number
  character: string
  escaped?: string
  abbreviation: Array<string>
  name: Array<string>
}

const codepointToEntry = (codepoint) : UnicodeControlEntry => {
  const character = String.fromCodePoint(codepoint)
      const aliases = unicodeAliases(character)
      const abbreviation = aliases.abbreviation
      const escaped = ESCAPES[codepoint] || `\\x${codepoint.toString(16).toLowerCase().padStart(2,"0")}`
      const name = [...(aliases.control || [] ), ...(aliases.figment || [] )]
      return {
        codepoint,
        character,
        escaped,
        abbreviation,
        name,
      }
}

const getControlSymbol = (codepoint) => {
  return <div className="symbol">{codepoint === 127 ? "␡" : codepoint < 127 ? String.fromCodePoint(9216 + codepoint) : ""}</div>
}

const columnHelper = createColumnHelper<UnicodeControlEntry>()

const columns = ({caret}) => ([
  columnHelper.accessor('codepoint', {
    cell: info => <span className="u">{uPlus(info.getValue())}</span>,
    header: "Codepoint",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.accessor('abbreviation', {
    cell: info => [getControlSymbol(info.row.original.codepoint), ...info.getValue()].map((name) => <div key={name}>{name}</div>),
    header: "Symbol",
    sortingFn: "basic",
    sortDescFirst: false
  }),
  columnHelper.display({
    cell: props => <span className="nv">^{String.fromCodePoint(props.row.original.codepoint === 127 ? 63 : props.row.original.codepoint + 64)}</span>,
    id: "caret",
    header: "Caret",
  }),
  columnHelper.display({
    cell: props => props.row.original.escaped && <span className="nv">{ props.row.original.escaped }</span>,
    id: "escaped",
    header: "Escaped",
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
  columnHelper.accessor('character', {
    cell: info => <span className="c">{info.getValue()}</span>,
    header: "Character",
    enableSorting: false,
  }),
  columnHelper.accessor('name', {
    cell: info => (info.getValue() || []).map((name) => <div key={name}>{name}</div>),
    header: "Name",
    sortingFn: "basic",
    sortDescFirst: false
  }),
].filter((column) => {
  return caret || column.id !== "caret"
}))

export function ControlsTable({codepoints, caret}) {
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
    columns: columns({caret}),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    state: {
      sorting
    },
    enableSortingRemoval: false,
  })

  return (
      <table className="table-last-large">
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

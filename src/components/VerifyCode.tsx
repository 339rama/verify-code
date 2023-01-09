import React from 'react'
import { Cell, VerifyCodeProps } from '../types'

export function VerifyCode(props: VerifyCodeProps) {
  const { count, onComplete } = props
  const cells: Record<string, Cell> = React.useMemo(() => {
    return new Array(count)
      .fill(undefined)
      .reduce((a, _, idx) => {
        const cell: Cell = {
          id: `verify-cell-${idx}`,
          key: idx,
          ref: React.createRef<HTMLInputElement>(),
        }
        a.push(cell)
        return a
      }, [] as Cell[])
      .map((c: Cell, idx: number, a: Cell[]) => {
        return {
          ...c,
          prev: a[idx - 1]?.ref,
          next: a[idx + 1]?.ref,
        }
      })
      .reduce((a: Record<string, Cell>, c: Cell) => {
        a[c.id] = c
        return a
      }, {} as Record<string, Cell>)
  }, [count])

  const onChange = React.useCallback(() => {
    const value = Object.values(cells).reduce((a, c) => {
      a += c.ref.current?.value || ''
      return a
    }, '') as string
    onComplete(value)
  }, [cells, onComplete])

  const onCellFilled: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      if (!/\d|Backspace/.test(e.key)) {
        return e.preventDefault()
      }
      if (e.key === 'Backspace') {
        e.currentTarget.value = ''
        if (!cells[e.currentTarget.dataset.id as string].prev) {
          onChange()
        } else {
          cells[e.currentTarget.dataset.id as string].prev?.current?.focus()
        }
        e.preventDefault()
      } else if (/\d/.test(e.key)) {
        if (!e.currentTarget.value) {
          e.currentTarget.value = e.key
        }
        if (!cells[e.currentTarget.dataset.id as string].next) {
          onChange()
        } else {
          cells[e.currentTarget.dataset.id as string].next?.current?.focus()
        }
        e.preventDefault()
      }
    },
    [cells, onChange],
  )
  return (
    <div className='cells-container'>
      {Object.values(cells).map((cell) => (
        <input
          key={cell.key}
          ref={cell.ref}
          data-id={cell.id}
          onKeyDown={onCellFilled}
          className='cell'
        />
      ))}
    </div>
  )
}

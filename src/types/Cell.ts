import React from 'react'

export type Cell = {
  id: string
  key: number
  ref: React.RefObject<HTMLInputElement>
  next?: React.RefObject<HTMLInputElement>
  prev?: React.RefObject<HTMLInputElement>
}

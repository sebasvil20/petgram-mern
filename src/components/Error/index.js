import React from 'react'
import { ErrorDiv } from './styles'
import { MdErrorOutline } from 'react-icons/md'

export const Error = ({ msg }) => {
  return (
    <ErrorDiv><MdErrorOutline /> {msg}</ErrorDiv>
  )
}

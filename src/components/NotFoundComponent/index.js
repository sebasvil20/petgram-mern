import React from 'react'
import { Div } from './styles'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
export const NotFoundComponent = () => {
  return (
    <Div>
      <h1>Ups! Los gatitos se han perdido</h1>
      <h2>Página no encontrada</h2>
      <BsFillExclamationTriangleFill size={32} />
    </Div>
  )
}

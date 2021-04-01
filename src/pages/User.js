import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <Layout title='User' subtitle='Aqui podras gestionar tu usuario'>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </Layout>
  )
}

import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Inicia sesión o registrate'>
      <RegisterMutation>
        {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(({ data }) => {
                      const { signup } = data
                      activateAuth(signup)
                    })
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algun problema.'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                }
            }
      </RegisterMutation>

      <LoginMutation>
        {
                    (login, { data, loading, error }) => {
                      const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        login({ variables }).then(({ data }) => {
                          const { login } = data
                          activateAuth(login)
                        })
                      }

                      const errorMsg = error && 'Contraseña incorrecta o el usuario no existe, intentelo de nuevo.'

                      return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesión' />
                    }
                }

      </LoginMutation>

    </Layout>
  )
}

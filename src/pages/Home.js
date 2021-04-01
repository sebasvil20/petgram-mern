import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import {Helmet} from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
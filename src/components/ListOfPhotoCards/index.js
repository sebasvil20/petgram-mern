import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { UnorderedList } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <UnorderedList>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </UnorderedList>
  )
}

import React from 'react'
import { Link, Nav } from './styles'
import { FaUser } from 'react-icons/fa'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'

const SIZE = '24px'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'> <AiFillHome size={SIZE} /> </Link>
      <Link to='/favs'> <AiFillHeart size={SIZE} /> </Link>
      <Link to='/user'> <FaUser size={SIZE} /> </Link>
    </Nav>
  )
}

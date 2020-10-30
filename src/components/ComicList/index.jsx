import React from 'react'
import { Link } from '@reach/router'
import Card from '../Card'
import { List } from './styles'

const ComicList = (props) => {
  // const {
  //   comics = []
  // } = props

  return (
    <List>
      <li><Link to='/comic/0'><Card /></Link></li>
      <li><Link to='/comic/01'><Card /></Link></li>
      <li><Link to='/comic/02'><Card /></Link></li>
      <li><Link to='/comic/03'><Card /></Link></li>
      <li><Link to='/comic/04'><Card /></Link></li>
      <li><Link to='/comic/05'><Card /></Link></li>
      <li><Link to='/comic/06'><Card /></Link></li>
      <li><Link to='/comic/07'><Card /></Link></li>
      <li><Link to='/comic/08'><Card /></Link></li>
      <li><Link to='/comic/0'><Card /></Link></li>
      <li><Link to='/comic/0'><Card /></Link></li>
      {/* {comics
        .map((comic) => <Card key={comic.id} {...comic} />)} */}
    </List>
  )
}

export default ComicList

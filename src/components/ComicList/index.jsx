import React from 'react'
import { Link } from '@reach/router'
import Card from '../Card'
import { List } from './styles'

const ComicList = (props) => {
  const {
    comics = []
  } = props

  return (
    <List>
      {comics
        .map((comic) => (
          <li key={comic.id}>
            <Link to={`/comic/${comic.id}`}><Card {...comic} /></Link>
          </li>))}
    </List>
  )
}

export default ComicList

import React from 'react'
import { Link } from '@reach/router'
import Card from '../Card'
import { List } from '../ComicList/styles'

const SeriesList = (props) => {
  const {
    series = []
  } = props

  return (
    <List>
      {series
        .map((serie) => (
          <li key={serie.id}>
            <Link to='/series'><Card {...serie} /></Link>
          </li>))}
    </List>
  )
}

export default SeriesList

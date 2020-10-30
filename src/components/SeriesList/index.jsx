import React from 'react'
import { Link } from '@reach/router'
import Card from '../Card'
import { List } from '../ComicList/styles'

const SeriesList = (props) => {
  // const {
  //   series = []
  // } = props

  return (
    <List>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
      <li><Link to='/'><Card /></Link></li>
    </List>
  )
}

export default SeriesList

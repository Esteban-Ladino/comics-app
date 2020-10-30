import React from 'react'
import SeriesList from '../../components/SeriesList'
import { Main } from '../Home/styles'

const Series = (props) => {
  const {
    data: {
      results = []
    }
  } = props

  return (
    <Main>
      <h1>Mavel's Series</h1>
      <SeriesList series={results} />
    </Main>
  )
}

export default Series

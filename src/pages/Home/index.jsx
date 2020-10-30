import React from 'react'
import ComicList from '../../components/ComicList'
import { Main } from './styles'

const Home = (props) => {
  // const {
  //   data: {
  //     results = []
  //   }
  // } = props

  return (
    <Main>
      <input
        tabIndex='0'
        aria-label='search'
        type='search'
        placeholder='Search any comic'
        htmlFor='search'
      />
      <h1>Mavel's Comics</h1>
      <ComicList />
      {/* <ComicList comics={results} /> */}
    </Main>
  )
}

export default Home

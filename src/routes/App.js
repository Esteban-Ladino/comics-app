/* eslint-disable no-undef */
import { Router } from '@reach/router'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ComicDetail from '../pages/ComicDetail'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Series from '../pages/Series'

function App () {
  const [comics, setComics] = useState([])
  const [series, setSeries] = useState([])

  // const api = 'https://gateway.marvel.com'
  // const apiKey = process.env.REACT_APP_API_KEY

  // useEffect(() => {
  //   getComics()
  //   getSeries()
  // }, [])

  // const getComics = () => {
  //   fetch(`${api}/v1/public/comics?apikey=${apiKey}`)
  //     .then(response => response.json())
  //     .then(comics => setComics(comics))
  // }
  // const getSeries = () => {
  //   fetch(`${api}/v1/public/series?apikey=${apiKey}`)
  //     .then(response => response.json())
  //     .then(series => setSeries(series))
  // }
  // const getComic = (comicId) => {
  //   fetch(`${api}/v1/public/comics/${comicId}?apikey=${apiKey}`)
  //     .then(response => response.json())
  //     .then(series => setSeries(series))
  // }

  useEffect(() => {
    setComics([])
    setSeries([])
  }, [])

  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path='/' {...comics} />
        <Series path='/series' {...series} />
        <ComicDetail path='/comic/:id' getComic={1} />
      </Router>
    </Layout>
  )
}

export default App

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

  const api = 'https://gateway.marvel.com'
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    getComics()
    getSeries()
  }, [])

  const getComics = () => {
    fetch(`${api}/v1/public/comics?apikey=${apiKey}&limit=100`)
      .then(response => response.json())
      .then(comics => setComics(comics))
      .catch(error => console.error(error))
  }

  const getSeries = () => {
    fetch(`${api}/v1/public/series?apikey=${apiKey}&limit=100`)
      .then(response => response.json())
      .then(series => setSeries(series))
      .catch(error => console.error(error))
  }

  const getComic = (comicId) => {
    return fetch(`${api}/v1/public/comics/${comicId}?apikey=${apiKey}`)
      .then(response => response.json())
      .then(comic => comic.data.results[0])
      .catch(error => console.error(error))
  }

  if (comics.length === 0 || series.length === 0) return <p>Loading...</p>

  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path='/' {...comics} />
        <Series path='/series' {...series} />
        <ComicDetail path='/comic/:id' getComic={getComic} />
      </Router>
    </Layout>
  )
}

export default App

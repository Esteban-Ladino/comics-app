/* eslint-disable no-undef */
import { Router } from '@reach/router'
import { useEffect, useState } from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function App () {
  const [comics, setComics] = useState([])

  const api = 'https://gateway.marvel.com'
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    getComics()
  }, [])

  const getComics = () => {
    fetch(`${api}/v1/public/comics?apikey=${apiKey}`)
      .then(response => response.json())
      .then(comics => setComics(comics))
  }

  return (
    <Router>
      <NotFound default />
      <Home path='/' comics={comics} />
    </Router>
  )
}

export default App

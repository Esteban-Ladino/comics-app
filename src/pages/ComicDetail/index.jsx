import React, { useEffect, useState } from 'react'
import { Main } from './styles'

const ComicDetail = ({ id, getComic }) => {
  const [comic, setComic] = useState({})

  useEffect(() => {
    getComic(id)
      .then(comic => {
        setComic(comic)
      })
      .catch(error => console.error(error))
  }, [])

  if (Object.entries(comic).length === 0) return <p>Loading...</p>

  const {
    title,
    description,
    thumbnail: {
      path,
      extension
    },
    creators: {
      items = []
    },
    dates,
    prices
  } = comic || {}

  return (
    <Main>
      <figure>
        <img src={`${path}/portrait_uncanny.${extension}`} alt={`${title} image`} />
      </figure>
      <section>
        <h1>{title}</h1>
        <h2>Description:</h2>
        <p>{description !== null ? description : 'No description available'}</p>
        <h2>Writers:</h2>
        <p>{items.map(({ name }) => name).join(', ')}</p>
        <h2>Published:</h2>
        <p>{new Date(Date.parse(dates[1].date)).toLocaleDateString()}</p>
        <h2>Price:</h2>
        <p>$ {prices[0].price}</p>
      </section>
    </Main>
  )
}

export default ComicDetail

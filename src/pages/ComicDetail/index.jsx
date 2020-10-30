import React from 'react'
import { Main } from './styles'

const ComicDetail = ({ id }) => {
  const extension = 'jpg'
  const path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'

  return (
    <Main>
      <figure>
        <img src={`${path}/portrait_fantastic.${extension}`} alt={`${extension} image`} />
      </figure>
      <section>
        <h1>Title</h1>
        <h2>Description:</h2>
        <p>DescriptionDescription</p>
        <h2>Writers:</h2>
        <p>TextTextTextText</p>
        <h2>Published:</h2>
        <p>TextTextTextText</p>
        <h2>Price:</h2>
        <p>TextTextTextText</p>
      </section>
    </Main>
    // <div>details {id}</div>
  )
}

export default ComicDetail

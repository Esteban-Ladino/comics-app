import React from 'react'

const Card = (props) => {
  const {
    title = 'Marvel Previews (2017)',
    thumbnail: {
      extension = 'jpg',
      path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    }
  } = props || {}

  return (
    <article>
      <figure>
        <img src={`${path}/portrait_fantastic.${extension}`} alt={`${title} image`} />
      </figure>
      <h2>{title}</h2>
    </article>
  )
}

export default Card

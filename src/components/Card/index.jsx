import React from 'react'

const Card = () => {
  const extension = 'jpg'
  const path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
  const title = 'Marvel Previews (2017)'

  // const {
  //   // id = 0,
  //   title = 'Marvel Previews (2017)',
  //   thumbnail: {
  //     extension = 'jpg',
  //     path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
  //   }
  // } = props

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

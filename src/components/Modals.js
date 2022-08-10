import React from 'react'

function Modals({title, overview, release_date, vote_average, vote_count  }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Aperçu : {overview}</h2>
      <p>Date de sortie : {release_date}</p>
      <p>Nombre de vote : {vote_count}</p>
      <p>Note moyenne : {vote_average}</p>
    </div>
  )
}

export default Modals
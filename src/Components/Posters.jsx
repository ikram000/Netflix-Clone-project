import React from 'react'

const Posters = ({ posters }) => {
  return (
    <div className="posters">
      {posters.map((data) => (
        <img key={data.id} src={data.poster_path} alt={`Poster ${data.id}`} />
      ))}
    </div>
  )
}

export default Posters

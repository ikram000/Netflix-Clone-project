import React from 'react'
import Posters from './Posters'

const Row = ({ title, posters }) => {
  return (
    <div>
      <div className="row">
        <h1>{title}</h1>
        <Posters posters={posters} />
      </div>
    </div>
  )
}

export default Row

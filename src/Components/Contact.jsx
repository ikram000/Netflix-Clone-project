import React from 'react'
import Row from './Row'
import {movies,movies2} from "./Data"
const Contact = () => {
  return (
    <div>
      <div className="contact">
      <Row title="Trending now" posters={movies}/>
      <Row title="Top pick for you" posters={movies2}/>
      </div>
    </div>
  )
}

export default Contact
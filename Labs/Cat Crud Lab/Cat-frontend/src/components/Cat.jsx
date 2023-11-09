import React from 'react'
import {Link} from 'react-router-dom'

function Cat({cat}) { //destructuring props
  return (
    <div> 
    <Link to ={`/cats/${cat._id}`}>
      <img className="cat-images" src={cat.image} alt={cat.name}></img>
      </Link> 
  </div>
  )
}

export default Cat
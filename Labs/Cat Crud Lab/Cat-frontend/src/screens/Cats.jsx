import {useEffect, useState} from 'react'
import {getCats} from '../../src/services/cats.js'
import Cat from '../components/Cat.jsx'

function Cats() {

  const [cats , setCats] = useState([])

  useEffect(()=>{
    fetchCats()
  },[]) //only fire this function one time 

  async function fetchCats () {
    const allCats = await getCats()
    setCats(allCats)
  }

  return (
    <div>
      <h1>All the cats!</h1>
      <div className="cats-container">
        {
          cats.map((cat)=>(
           <Cat cat={cat} />
          ))
        }
      </div>
    </div>
  )
}

export default Cats
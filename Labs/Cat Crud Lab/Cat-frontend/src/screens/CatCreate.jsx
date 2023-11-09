import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createCat } from '../services/cats'

function CatCreate() {
  const[cat, setCat] = useState({
    name:"",
    aka:"",
    age:"",
    gender:"",
    species:"",
    bio:"",
    image:"",
    likesCuddles: true
  })

  let navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()

    await createCat(cat)
    navigate('/cats')
  }
  const handleChange = (e)=>{
    const {name, value} = e.target
    setCat((prevCat)=>({ //previous state
      ...prevCat, //spread out the old content
      [name]:value //overwrite the previous one
    }))

  }

  return (
    <div>
      <h1>Add a cute cat in our database</h1>
      <form className='create-form' onSubmit={handleSubmit}> 
      {/* Only add event listener to the form ^ */}
      <input
      type="text"
      placeholder="Please add your cat's name"
      name="name"
      // Needs value 
      value={cat.name}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="nickname"
      name="aka"
      // Needs value 
      value={cat.aka}
      onChange={handleChange}
      />
       <input
      type="number"
      placeholder="age"
      name="age"
      // Needs value 
      value={cat.age}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="Cat's gender"
      name="gender"
      // Needs value 
      value={cat.gender}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="Cat's bio"
      name="bio"
      // Needs value 
      value={cat.bio}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="Please add your cat's photo"
      name="image"
      // Needs value 
      value={cat.image}
      onChange={handleChange}
      />
      <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default CatCreate
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCat, getCat } from '../services/cats';

function CatEdit() {
  const [cat, setCat] = useState({
    name: "",
    aka: "",
    age: "",
    gender: "",
    species: "",
    bio: "",
    image: "",
    likesCuddles: true
  })

  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()

  useEffect(() => {
    fetchCat()
  }, [])

  async function fetchCat() {
    const oneCat = await getCat(id)
    setCat(oneCat)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await editCat(id, cat)
    navigate(`/cats/${id}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setCat((prevCat) => ({
      ...prevCat,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Edit your cute cat in our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your cat's name"
          name="name"
          value={cat.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          value={cat.aka}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={cat.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's gender"
          name="gender"
          value={cat.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's Bio"
          name="bio"
          value={cat.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's Species"
          name="species"
          value={cat.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add your cat's cute photo"
          name="image"
          value={cat.image}
          onChange={handleChange}
        />
        <button type="submit">Edit Your Cat!</button>
      </form>
    </div>
  )
}

export default CatEdit
const cats = [
  {
    name: "Toby",
    hairColor: "brown",
    hairLength: "short",
    age: 2,
    gender: "male",
    temperament: "playful",
    favoriteToy: "ball",
  },
  {
    name: "Milo",
    hairColor: "white",
    hairLength: "long",
    age: 5,
    gender: "male",
    temperament: "social butterfly",
    favoriteToy: "stuffed mouse",
  },
  {
    name: "Cherie",
    hairColor: "black",
    hairLength: "short",
    age: 3,
    gender: "female",
    temperament: "curious",
    favoriteToy: "laser pointer",
  },
  {
    name: "Fiona",
    hairColor: "orange",
    hairLength: "medium",
    age: 4,
    gender: "female",
    temperament: "grumpy",
    favoriteToy: "feather wand",
  },
  {
    name: "Charlotte",
    hairColor: "grey",
    hairLength: "medium",
    age: 3,
    gender: "female",
    temperament: "affectionate",
    favoriteToy: "tiny soccer balls",
  },
];

// Prompts for forEach
// - Log each cat's hairColor and age using the forEach method.
cats.forEach((cat)=>{
  console.log(cat.hairColor, cat.age)
})
// - Increase the age of each cat by 1 year using the forEach method.
cats.forEach((cat)=>{
  cat.age += 1
})
// - Log a message describing each cat's favorite toy using the forEach method.
cats.forEach((cat)=>{
  console.log(cat.favoriteToy)
})
// Prompts for map
// - Create a new array containing only the hairColor of each cat using the map method.
const hairColors =  cats.map((cat)=>{
  return cat.hairColor
})
console.log(hairColors)

// - Create a new array where each cat's age is doubled using the map method.
const doubledAge =  cats.map((cat)=>{
  cat.age *=2
  return cat
})
console.log(doubledAged)
// - Create a new array of cats, but change the gender of each cat using the map method.
const changedGenders= cats.map((cat)=>{
  cat.gender = cat.gender === "male" ? "female" : "male"
  return
})
// Prompts for find
// - Use the find method to get the first cat that is "grumpy".
const fiona = cats.find((cat)=>{
  return cat.name === "Fiona" //condition
})
console.log(fiona)

const grumpyCat = cats.find((cat)=>{
  return cat.temperament ==="grumpy"
})
console.log(grumpyCat)
// - Use the find method to get the first cat with a "long" hair length.
const cathairLength = cats.find((cat)=>{ //Returns only 1
  return cat.hairLength ==="long"
})
console.log(cathairLength)

const cathairLengthAll = cats.filter((cat)=>{ //Returns more than 1
  return cat.hairLength ==="medium"
})
console.log(cathairLengthAll)
// - Use the find method to retrieve the first cat whose favorite toy is a "laser pointer".

const laserFanCat = cats.find((cat)=>{
  return cat.favoriteToy === "laser pointer"
})
console.log(laserFanCat)


// Prompts for filter
// - Use the filter method to get all cats that are older than 3 years.
// - Use the filter method to get all female cats.
// - Use the filter method to retrieve all cats with a "short" hair length.
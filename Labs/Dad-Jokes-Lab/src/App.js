// import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react"; //array destructuring

function App() {
  const [joke, setJoke] =useState(null) //array 

  const fetchJoke = async () => {
    const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" } })
    console.log(res.data)
    setJoke(res.data.joke)
        
  }
  useEffect(() => {  //callback function
    fetchJoke()
  }, []); //dependency array

  return (
    <div className="App">
      <div className ="header">
        <h3>Dad Jokes</h3>
      </div>
      <div>
       <div className='Joke'>
       {joke ? <p>{joke} </p> : null }
       </div>
        <button className='btn' onClick={fetchJoke}>Get New Joke</button>
        
      </div>
    </div>
  );
}

export default App;
